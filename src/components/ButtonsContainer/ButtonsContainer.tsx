import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './ButtonsContainer.module.css';

interface IProps {
  className?: string;
}

export const ButtonsContainer: React.FC<PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  return <div className={classNames(styles.root, className)}>{children}</div>;
};
