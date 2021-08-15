import React from 'react';
import classNames from 'classnames';
import cn from 'classnames/bind';
import { ITableRow } from 'pages/Report/types';

import styles from './GroupCell.module.css';

export const GroupCell: React.FC<ITableRow> = ({ group }) => {
  return (
    <div
      className={classNames(styles.root, cn.bind(styles)(`Group-${group.toLowerCase()}`))}
    >
      {group.toUpperCase()}
    </div>
  );
};
