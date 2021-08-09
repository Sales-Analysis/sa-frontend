import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';
import { loader } from 'graphql.macro';
import { AnimatedBlock } from 'pages/IndexPage/AnimatedBlock';
import { Description } from 'pages/IndexPage/Description';
import { Query } from 'types/structures';
import { AnalysisList } from './AnalysisList';
import { Faq } from './Faq';

import styles from './IndexPage.module.css';

const getIndexPageContentQuery = loader('./getIndexPageContentQuery.graphql');

const messages = defineMessages({
  howItWork: {
    id: 'pages.index.howItWork',
    defaultMessage: 'Как это работает',
  },
  slogan: {
    id: 'pages.index.slogan',
    defaultMessage: 'Быстро. Бесплатно. Точно.',
  },
});
export const IndexPage = React.memo(function IndexPage() {
  const { formatMessage } = useIntl();
  const { data } = useQuery<Query>(getIndexPageContentQuery);

  return (
    <div className={styles.root}>
      <Description />
      <AnalysisList widgets={data?.ListAnalysis || []} />
      <AnimatedBlock text={formatMessage(messages.howItWork)} />
      <AnimatedBlock text={formatMessage(messages.slogan)} />
      <Faq items={data?.ListFAQ || []} />
    </div>
  );
});
