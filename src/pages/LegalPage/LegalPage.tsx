import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';

import styles from './LegalPage.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.legal.title',
    defaultMessage: 'Юридическая информация',
  },
});

export const LegalPage: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <Text size={'5xl'} weight={'bold'}>
        {formatMessage(messages.title)}
      </Text>
    </div>
  );
};
