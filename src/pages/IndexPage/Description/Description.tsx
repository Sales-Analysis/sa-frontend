import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { StartAnalysisButton } from 'components/StartAnalysisButton';

import styles from './Description.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.index.title',
    defaultMessage: 'Бесплатный сервис для анализа продаж',
  },
  description: {
    id: 'pages.index.description',
    defaultMessage: `Анализы основаны на принципе Парето: «за большинство возможных
    результатов отвечает относительно небольшое число причин», также оно известно
    как правило 20 на 80. Оно поможет оптимизировать работу и построить стратегию —
    в логистике, закупках, продажах и маркетинге. Применяется в тайм-менеджменте и
    оценке персонала.`,
  },
});

export const Description = React.memo(function Description() {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <Text size={'6xl'} weight={'bold'} align={'center'}>
        {formatMessage(messages.title)}
      </Text>
      <Text size={'2xl'} align={'center'} view={'ghost'}>
        {formatMessage(messages.description)}
      </Text>
      <StartAnalysisButton />
    </div>
  );
});
