import React from 'react';

import styles from './Divider.module.css';

export const Divider = React.memo(function Divider() {
  return <div className={styles.root} />;
});
