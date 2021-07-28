import React, { PropsWithChildren, ReactNode } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { AnalysisStep } from 'components/AnalysisStep';

import styles from './FirstStep.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.analysis.step.first.title',
    defaultMessage: '1. Загрузите файл с данными'
  },
  description: {
    id: 'pages.analysis.step.first.description',
    defaultMessage: `Файл для загрузки должен включать в себя категории товаров,
    в формате xls. и csv. и не превышать 300 Мб. Как должен выглядеть файл для загрузки
    можно посмотреть в этом {url}`
  },
  example: {
    id: 'pages.analysis.step.first.description.example',
    defaultMessage: 'примере'
  }
});

export const FirstStep: React.FC<PropsWithChildren<ReactNode>> = ({children}) => {
  const {formatMessage} = useIntl();

  return (
    <AnalysisStep className={styles.root}>
      <Text size={'2xl'}>{formatMessage(messages.title)}</Text>
      <Text view={'ghost'}>{formatMessage(messages.description, {
        url: <Link to={'/'}>{formatMessage(messages.example)}</Link>
      })}</Text>
      {children}
    </AnalysisStep>
  );
};
