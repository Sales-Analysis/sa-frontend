import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Badge } from '@consta/uikit/Badge';
import { Button } from '@consta/uikit/Button';
import { Text } from '@consta/uikit/Text';

import styles from './Widget.module.css';

const messages = defineMessages({
  badge: {
    id: 'widget.badge',
    defaultMessage: 'Скоро появится',
  },
});

interface IProps {
  title: string;
  description: string;
  img: string;
  disabled?: boolean;
}

export const Widget = React.memo<IProps>(function Widget({
  title,
  description,
  img,
  disabled,
}) {
  const { formatMessage } = useIntl();

  return (
    <div>
      <div className={styles.Wrapper}>
        <div>
          <Text>{title}</Text>
          {disabled && (
            <Badge
              view={'filled'}
              status={'system'}
              form={'round'}
              label={formatMessage(messages.badge)}
            />
          )}
        </div>
        <Text>{description}</Text>
        {!disabled && <Button />}
      </div>
      <img src={img} alt="widget" />
    </div>
  );
});
