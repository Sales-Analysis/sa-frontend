import React, { PropsWithChildren } from 'react';
import { Text } from '@consta/uikit/Text';
import classNames from 'classnames';

import styles from './Step.module.css';

interface IProps {
  title: string;
  className?: string;
}

export const Step: React.FC<PropsWithChildren<IProps>> = ({
  title,
  className,
  children,
}) => {
  return (
    <div className={classNames(styles.root, className)}>
      <Text size={'2xl'} weight={'bold'}>
        {title}
      </Text>
      {children}
    </div>
  );
};
