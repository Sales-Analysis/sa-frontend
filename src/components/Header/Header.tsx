import React, { ReactElement } from 'react';
import { StartAnalysisButton } from 'components/StartAnalysisButton';
import { noop } from 'utils';

import styles from './Header.module.css';

interface IProps {
  menuItems: ReactElement;
}

export const Header = React.memo<IProps>(function Header({ menuItems }) {
  return (
    <div className={styles.root}>
      <div className={styles.Items}>{menuItems}</div>
      <StartAnalysisButton onClick={noop} isBordered={true} />
    </div>
  );
});
