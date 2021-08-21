import React from 'react';
import { Text } from '@consta/uikit/Text';
import classNames from 'classnames';
import cn from 'classnames/bind';

import styles from './StatsBar.module.css';

interface IProps {
  stats: Map<string, number>;
}

const calculatePercentage = (value: number) => (value * 100) / 100;

export const StatsBar: React.FC<IProps> = ({ stats }) => {
  return (
    <div className={styles.root}>
      {Array.from(stats.entries())
        .sort()
        .map(([key, value], i) => (
          <div
            key={i}
            style={{ width: `${calculatePercentage(value)}%` }}
            className={classNames(styles.Group)}
          >
            <Text
              weight={'bold'}
              className={classNames(
                styles.GroupLabel,
                cn.bind(styles)(`GroupLabel-${key.toLowerCase()}`)
              )}
            >
              {key}
            </Text>
            <div
              className={classNames(
                cn.bind(styles)(`GroupBody-${key.toLowerCase()}`),
                styles.GroupBody
              )}
            >
              <Text size={'s'} weight={'bold'} className={styles.GroupBodyText}>
                {value} name
              </Text>
            </div>
          </div>
        ))}
    </div>
  );
};
