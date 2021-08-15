import React, { PropsWithChildren } from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import classNames from 'classnames';
import { routes } from 'routes';
import { Divider } from 'components/Devider';
import { getRoutePath } from 'utils';

import styles from './Page.module.css';

const messages = defineMessages({
  toMainButton: {
    id: 'components.page.button.toMain',
    defaultMessage: 'Вернуться на главную',
  },
  runCalculateButton: {
    id: 'components.page.button.runCalculate',
    defaultMessage: 'Запустить расчет',
  },
});

interface IProps {
  className?: string;
}

export const Page: React.FC<PropsWithChildren<IProps>> = ({ className, children }) => {
  const { formatMessage } = useIntl();
  const history = useHistory();

  return (
    <div className={styles.root}>
      <div className={classNames(styles.Wrapper, className)}>
        {children}
        <Divider />
        <div className={styles.ButtonsGroup}>
          <Button
            view={'secondary'}
            label={formatMessage(messages.toMainButton)}
            onClick={() => history.push(getRoutePath(routes.main))}
          />
          <Button
            view={'secondary'}
            disabled
            label={formatMessage(messages.runCalculateButton)}
          />
        </div>
      </div>
    </div>
  );
};
