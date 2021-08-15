import { IRoute } from 'types';

export function getRoutePath(route: IRoute | undefined): string {
  return route?.path || '';
}
