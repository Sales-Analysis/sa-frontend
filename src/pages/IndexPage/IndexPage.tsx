import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useQuery } from '@apollo/client';
import { useSpring } from '@react-spring/web';
import { loader } from 'graphql.macro';
import { AnimatedBlock } from 'pages/IndexPage/AnimatedBlock';
import { Description } from 'pages/IndexPage/Description';
import { Hiw } from 'pages/IndexPage/Hiw';
import { TQuery } from 'types/structures';
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
  const { data } = useQuery<TQuery>(getIndexPageContentQuery);

  const [{ scroll }, api] = useSpring(() => ({ scroll: 0 }));

  const ref = useRef<HTMLDivElement>(null);
  const handleScroll = useCallback(
    (e) => {
      console.log(scroll);

      api.set({ scroll: e.target.scrollTop / (window.innerHeight / 2) });
    },
    [api, scroll]
  );

  const current = useMemo(() => ref.current, [ref]);

  useEffect(() => {
    current?.addEventListener('scroll', handleScroll);

    return () => {
      current?.removeEventListener('scroll', handleScroll);
    };
  }, [current, handleScroll]);

  return (
    <div className={styles.root} ref={ref}>
      <Description />
      <AnalysisList widgets={data?.ListAnalysis || []} />
      <AnimatedBlock text={formatMessage(messages.howItWork)} />
      <Hiw data={data?.ListHIW || []} />
      <AnimatedBlock text={formatMessage(messages.slogan)} />
      <Faq items={data?.ListFAQ || []} />
    </div>
  );
});
