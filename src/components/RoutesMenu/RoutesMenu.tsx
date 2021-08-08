import React from 'react';
import { Link } from 'react-router-dom';
import { Text } from '@consta/uikit/Text';
import { routes } from 'routes';

import styles from './RoutesMenu.module.css';

export const RoutesMenu = React.memo(function RoutesMenu() {
  return (
    <>
      {routes.map(
        ({ title, path }) =>
          title && (
            <Link key={path} to={path} className={styles.Link}>
              <Text size={'s'} weight={'bold'}>
                {title}
              </Text>
            </Link>
          )
      )}
    </>
  );
});
