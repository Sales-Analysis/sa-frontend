import React, { PropsWithChildren } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { Step } from '../Step';

import styles from './FirstStep.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.analysis.step.first.title',
    defaultMessage: '1. Загрузите файл с данными',
  },
  description: {
    id: 'pages.analysis.step.first.description',
    defaultMessage: `Файл для загрузки должен включать в себя категории товаров,
    в формате xls. и csv. и не превышать {uploadLimit} Мб. Как должен выглядеть файл для загрузки
    можно посмотреть в этом {url}`,
  },
  example: {
    id: 'pages.analysis.step.first.description.example',
    defaultMessage: 'примере',
  },
});

interface IProps {
  uploadLimit: number;
}

export const FirstStep: React.FC<PropsWithChildren<IProps>> = ({
  children,
  uploadLimit,
}) => {
  const { formatMessage } = useIntl();

  return (
    <Step className={styles.root} title={formatMessage(messages.title)}>
      <Text className={styles.Description} view={'ghost'}>
        {formatMessage(messages.description, {
          url: <Link to={'#'}>{formatMessage(messages.example)}</Link>,
          uploadLimit,
        })}
      </Text>
      {children}
    </Step>
  );
};
