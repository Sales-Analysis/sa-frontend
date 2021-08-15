import React from 'react';
import { Text } from '@consta/uikit/Text';
import { RoutesMenu } from 'components/RoutesMenu';
import { StartAnalysisButton } from 'components/StartAnalysisButton';

import styles from './Header.module.css';

export const Header = React.memo(function Header() {
  return (
    <div className={styles.root}>
      <div className={styles.Items}>
        <RoutesMenu textRenderer={<Text size={'s'} weight={'bold'} />} />
      </div>
      <StartAnalysisButton isBordered={true} />
    </div>
  );
});
