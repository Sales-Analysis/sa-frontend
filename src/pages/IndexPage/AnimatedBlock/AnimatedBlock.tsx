import React from 'react';
import { Text } from '@consta/uikit/Text';

import styles from './AnimatedBlock.module.css';

interface IProps {
  text: string;
}

export const AnimatedBlock = React.memo<IProps>(function AnimatedBlock({ text }) {
  return (
    <div className={styles.root}>
      <Text className={styles.Text} size={'6xl'} weight={'bold'}>
        {text}
      </Text>
    </div>
  );
});
