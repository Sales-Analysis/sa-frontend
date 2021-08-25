import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Badge } from '@consta/uikit/Badge';
import { Text } from '@consta/uikit/Text';
import { StartAnalysisButton } from 'components/StartAnalysisButton';

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
    <div className={styles.root}>
      <div className={styles.Content}>
        <div className={styles.TitleContainer}>
          <Text size={'3xl'} weight={'bold'}>
            {title}
          </Text>
          {disabled && (
            <Badge
              view={'filled'}
              status={'system'}
              form={'round'}
              label={formatMessage(messages.badge)}
            />
          )}
        </div>
        <Text view={'secondary'}>{description}</Text>
        {!disabled && <StartAnalysisButton />}
      </div>
      <div className={styles.ImageContainer}>
        <img className={styles.Image} src={`/${img}`} alt="widget" />
      </div>
    </div>
  );
});
