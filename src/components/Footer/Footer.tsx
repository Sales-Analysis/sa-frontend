import React from 'react';
import { Text } from '@consta/uikit/Text';
import { RoutesMenu } from 'components/RoutesMenu';

import styles from './Footer.module.css';

export const Footer = React.memo(function Footer() {
  return (
    <div className={styles.root}>
      <div className={styles.Items}>
        <RoutesMenu
          textRenderer={<Text size={'s'} weight={'bold'} className={styles.Text} />}
        />
      </div>
    </div>
  );
});
