import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';

import styles from './AnalysisList.module.css';

const messages = defineMessages({
  widgets_title: {
    id: 'pages.index.widgets.title',
    defaultMessage: 'Другие анализы',
  },
});

interface IProps {
  widgets: any[];
}

export const AnalysisList: React.FC<IProps> = ({ widgets }) => {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <Text size={'5xl'} weight={'bold'}>
        {formatMessage(messages.widgets_title)}
      </Text>
    </div>
  );
};
