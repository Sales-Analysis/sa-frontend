import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { Step } from '../Step';

import styles from '../FirstStep/FirstStep.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.analysis.step.second.title',
    defaultMessage: '2. Настройте опции',
  },
});

export const SecondStep: React.FC = () => {
  const {formatMessage} = useIntl();

  return (
    <Step className={styles.root}>
      <Text size={'2xl'}>{formatMessage(messages.title)}</Text>
    </Step>
  );
};
