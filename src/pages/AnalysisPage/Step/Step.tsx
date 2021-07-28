import React, { PropsWithChildren } from 'react';
import classNames from 'classnames';

import styles from './AnalysisStep.module.css';

interface IProps {
  className?: string;
}

export const Step: React.FC<PropsWithChildren<IProps>> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames(styles.root, className)}>{children}</div>
  );
};
