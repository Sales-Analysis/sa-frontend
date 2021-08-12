import React, { ReactElement, ReactNode } from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { AnalysisPage } from 'pages/AnalysisPage';
import { IndexPage } from 'pages/IndexPage';
import { LegalPage } from 'pages/LegalPage';
import { Report } from 'pages/Report';

const messages = defineMessages({
  main: {
    id: 'route.main',
    defaultMessage: 'О сервисе',
  },
  hiw: {
    id: 'route.how_it_work',
    defaultMessage: 'Как это работает',
  },
  legal: {
    id: 'route.legal',
    defaultMessage: 'Юридическая информация',
  },
  privacy: {
    id: 'route.privacy',
    defaultMessage: 'Конфиденциальность',
  },
});

export type TRoute = {
  path: string;
  component: ReactNode;
  title?: ReactElement;
  exact?: boolean;
};

export const routes: TRoute[] = [
  {
    path: '/',
    exact: true,
    title: <FormattedMessage {...messages.main} />,
    component: <IndexPage />,
  },
  {
    path: '/#hiw',
    title: <FormattedMessage {...messages.hiw} />,
    component: <IndexPage />,
  },
  {
    path: '/analysis',
    component: <AnalysisPage />,
  },
  {
    path: '/report',
    component: <Report />,
  },
  {
    path: '/legal',
    title: <FormattedMessage {...messages.legal} />,
    component: <LegalPage />,
  },
  {
    path: '/privacy',
    title: <FormattedMessage {...messages.privacy} />,
    component: <div>Privacy</div>,
  },
];
