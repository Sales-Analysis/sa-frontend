import React from 'react';
import { defineMessages, FormattedMessage } from 'react-intl';
import { AnalysisPage } from 'pages/AnalysisPage';
import { IndexPage } from 'pages/IndexPage';
import { LegalPage } from 'pages/LegalPage';
import { PrivacyPage } from 'pages/PrivacyPage';
import { Report } from 'pages/Report';
import { IRoute, IRoutesCollection } from 'types';

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

export const routes: IRoutesCollection<IRoute> = {
  main: {
    path: '/',
    exact: true,
    title: <FormattedMessage {...messages.main} />,
    component: <IndexPage />,
  },
  hiw: {
    path: '/#hiw',
    title: <FormattedMessage {...messages.hiw} />,
    component: <IndexPage />,
  },
  analysis: {
    path: '/analysis',
    component: <AnalysisPage />,
  },
  report: {
    path: '/report',
    component: <Report />,
  },
  legal: {
    path: '/legal',
    title: <FormattedMessage {...messages.legal} />,
    component: <LegalPage />,
  },
  privacy: {
    path: '/privacy',
    title: <FormattedMessage {...messages.privacy} />,
    component: <PrivacyPage />,
  },
};
