import { ReactElement, ReactNode } from 'react';

export interface IRoutesCollection<T> {
  [key: string]: T;
}

export interface IRoute {
  path: string;
  component: ReactNode;
  title?: ReactElement;
  exact?: boolean;
}
