import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'routes';

import styles from './RoutesMenu.module.css';

interface IProps {
  textRenderer: ReactElement;
}

export const RoutesMenu = React.memo<IProps>(function RoutesMenu({ textRenderer }) {
  return (
    <>
      {Object.values(routes).map(
        ({ title, path }) =>
          title && (
            <Link key={path} to={path} className={styles.Link}>
              {React.cloneElement(textRenderer, {}, title)}
            </Link>
          )
      )}
    </>
  );
});
