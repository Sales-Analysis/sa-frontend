import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Loader } from '@consta/uikit/Loader';
import { MessageFormatElement } from '@formatjs/icu-messageformat-parser';

async function loadLocaleData(
  locale: string
): Promise<Record<string, MessageFormatElement[]>> {
  switch (locale) {
    default:
      // TODO: fix it in the feature by lang changing implemented
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return import('lang/ru.json');
  }
}

export const LanguageProvider = React.memo<PropsWithChildren<ReactNode>>(
  function LocaleProvider({ children }) {
    const locale = 'ru-RU'; //navigator.language;
    const [messages, setMessages] = useState<Record<
      string,
      MessageFormatElement[]
    > | null>(null);

    useEffect(() => {
      async function loadTranslations() {
        const translation = await loadLocaleData(locale);
        setMessages(translation);
      }

      loadTranslations().finally();
    }, [locale]);

    return messages ? (
      <IntlProvider locale={locale} defaultLocale="ru-RU">
        {children}
      </IntlProvider>
    ) : (
      <Loader />
    );
  }
);
