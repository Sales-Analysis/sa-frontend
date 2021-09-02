import React from 'react';
import { Text } from '@consta/uikit/Text';
import { SpringRef } from '@react-spring/web';
import { ImagePreview } from '../ImagePreview';

import styles from './Step.module.css';

interface IProps {
  id: string | number;
  title: string;
  description: string;
  image: string;
  imageRef?: SpringRef;
}

export const Step: React.FC<IProps> = ({ id, image, title, description, imageRef }) => {
  const order = Number(id) + 1;

  return (
    <div className={styles.root}>
      <ImagePreview src={image} className={styles.Preview} />
      <div className={styles.Describe}>
        <Text className={styles.Order}>{('0' + order).slice(-2)}</Text>
        <Text size={'3xl'} weight={'bold'}>
          {title}
        </Text>
        <Text size={'m'}>{description}</Text>
      </div>
    </div>
  );
};
