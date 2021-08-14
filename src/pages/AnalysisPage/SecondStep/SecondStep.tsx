import React, { useMemo, useState } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Select } from '@consta/uikit/Select';
import { Text } from '@consta/uikit/Text';
import { Step } from 'pages/AnalysisPage/Step';

import styles from './SecondStep.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.analysis.step.second.title',
    defaultMessage: '2. Настройте опции',
  },
  firstSelector: {
    id: 'pages.analysis.selector.title',
    defaultMessage: 'Тип анализа',
  },
  firstOptionSelector: {
    id: 'pages.analysis.selector.first',
    defaultMessage: 'ABC анализ',
  },
});

type Item = {
  label: string;
  id: number;
};

export const SecondStep: React.FC = () => {
  const { formatMessage } = useIntl();
  const items = useMemo<Item[]>(
    () => [
      {
        label: formatMessage(messages.firstOptionSelector),
        id: 0,
      },
    ],
    [formatMessage]
  );
  const [value, setValue] = useState<Item | null>(items[0] || null);

  return (
    <Step className={styles.root} title={formatMessage(messages.title)}>
      <Text size={'s'} view={'ghost'}>
        {formatMessage(messages.firstSelector)}
      </Text>
      <Select items={items} value={value} onChange={({ value }) => setValue(value)} />
    </Step>
  );
};
