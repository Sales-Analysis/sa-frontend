import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { Page } from 'components/Page';

const messages = defineMessages({
  title: {
    id: 'pages.privacy.title',
    defaultMessage: 'Конфиденциальность',
  },
});

export const PrivacyPage: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <Page>
      <Text size={'5xl'} weight={'bold'}>
        {formatMessage(messages.title)}
      </Text>
    </Page>
  );
};
