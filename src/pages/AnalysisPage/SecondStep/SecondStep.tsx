import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { AnalysisStep } from 'components/AnalysisStep';

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
    <AnalysisStep className={styles.root}>
      <Text size={'2xl'}>{formatMessage(messages.title)}</Text>
    </AnalysisStep>
  );
};
