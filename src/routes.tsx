import { ReactNode } from 'react';
import { AnalysisPage } from './pages/AnalysisPage';

export type TRoute = {
  path: string,
  component: ReactNode,
  exact?: boolean
};

export const routes: TRoute[] = [
  {
    path: '/',
    exact: true,
    component: <div>Home</div>
  },
  {
    path: '/analysis',
    component: <AnalysisPage/>
  }
];
