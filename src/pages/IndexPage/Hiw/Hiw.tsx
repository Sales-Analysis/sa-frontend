import React, { useMemo, useRef, useState } from 'react';
import image from 'mocks/hiw_1.png';
import { THiw } from 'types/structures';
import { Step } from './Step';

import styles from './Hiw.module.css';

interface IProps {
  data: THiw[];
}

export const Hiw: React.FC<IProps> = ({ data }) => {
  const [currItemIndex, setCurrItemIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const element = useMemo(() => data[currItemIndex], [currItemIndex, data]);

  return (
    <div className={styles.root} ref={ref}>
      {element && <Step key={element.id} {...element} image={image} />}
    </div>
  );
};
