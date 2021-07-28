import React, { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Loader } from '@consta/uikit/Loader';

async function loadLocaleData(locale: string) {
  switch (locale) {
    default:
      return import('lang/ru-RU.json');
  }
}

export const LanguageProvider = React.memo<PropsWithChildren<ReactNode>>(function LocaleProvider({children}) {
  const locale = navigator.language;
  const [messages, setMessages] = useState<Record<string, any> | null>(null);

  useEffect(() => {
    async function loadTranslations() {
      const translation = await loadLocaleData(locale);
      setMessages(translation);
    }

    loadTranslations().finally();
  }, [locale]);

  return (messages ?
      <IntlProvider
        locale={locale}
        defaultLocale="ru-RU"
      >
        {children}
      </IntlProvider> : <Loader />
  );
});
