import React from 'react';
import { useInView } from 'react-hook-inview';
import { Text } from '@consta/uikit/Text';
import { animated, useSpring } from '@react-spring/web';

import styles from './AnimatedBlock.module.css';

interface IProps {
  text: string;
}

export const AnimatedBlock = React.memo<IProps>(function AnimatedBlock({ text }) {
  const [props, api] = useSpring(() => ({
    scale: 0,
    transition: '2s',
  }));
  const [ref] = useInView({
    threshold: 0.7,
    onEnter: () => api.set({ scale: 1 }),
    onLeave: () => api.set({ scale: 0 }),
  });

  return (
    <div className={styles.root} ref={ref}>
      <animated.div style={props}>
        <Text className={styles.Text} size={'6xl'} weight={'bold'}>
          {text}
        </Text>
      </animated.div>
    </div>
  );
});
