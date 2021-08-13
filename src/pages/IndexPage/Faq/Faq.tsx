import React from 'react';
import Collapsible from 'react-collapsible';
import { defineMessages, useIntl } from 'react-intl';
import { Text } from '@consta/uikit/Text';
import { TFaq } from 'types/structures';

import styles from './Faq.module.css';

const messages = defineMessages({
  title: {
    id: 'pages.index.faq.title',
    defaultMessage: 'Остались вопросы?',
  },
});

interface IProps {
  items: TFaq[];
}

export const Faq = React.memo<IProps>(function Faq({ items }) {
  const { formatMessage } = useIntl();

  return (
    <div className={styles.root}>
      <Text size={'5xl'} weight={'bold'}>
        {formatMessage(messages.title)}
      </Text>

      {items.map((item) => (
        <Collapsible className={styles.Collapsible} trigger={item.title} key={item.id}>
          <p>{item.description}</p>
        </Collapsible>
      ))}
    </div>
  );
});
