import React from 'react';
import classNames from 'classnames';

import styles from './ImagePreview.module.css';

interface IProps {
  src: string;
  className?: string;
}

export const ImagePreview: React.FC<IProps> = ({ src, className }) => {
  return (
    <div className={classNames(styles.root, className)}>
      <img src={src} alt={''} className={styles.Image} />
    </div>
  );
};
