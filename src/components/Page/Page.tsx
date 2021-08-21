import React, { PropsWithChildren, ReactElement } from 'react';
import classNames from 'classnames';
import { Divider } from 'components/Devider';

import styles from './Page.module.css';

interface IProps {
  bottomComponent?: ReactElement;
  className?: string;
}

export const Page: React.FC<PropsWithChildren<IProps>> = ({
  bottomComponent,
  className,
  children,
}) => {
  return (
    <div className={styles.root}>
      <div className={classNames(styles.Wrapper, className)}>
        {children}
        {bottomComponent && (
          <>
            <Divider />
            {bottomComponent}
          </>
        )}
      </div>
    </div>
  );
};
