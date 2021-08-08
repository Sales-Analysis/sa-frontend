import React, { ReactElement } from 'react';

import styles from './Footer.module.css';

interface IProps {
  menuItems: ReactElement;
}

export const Footer = React.memo<IProps>(function Footer({ menuItems }) {
  return <div className={styles.root}>{menuItems}</div>;
});
