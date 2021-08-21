import { ReactElement, ReactNode } from 'react';

export type TRoutesCollection<K extends string, T> = Record<K, T>;

export interface IRoute {
  path: string;
  component: ReactNode;
  title?: ReactElement;
  exact?: boolean;
}
