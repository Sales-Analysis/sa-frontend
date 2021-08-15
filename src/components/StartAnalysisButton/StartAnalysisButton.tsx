import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { routes } from 'routes';
import { getRoutePath } from 'utils';

const messages = defineMessages({
  button: {
    id: 'components.button.startAnalysis',
    defaultMessage: 'Начать анализ',
  },
});

interface IProps {
  onClick: () => any;
  isBordered?: boolean;
}

export const StartAnalysisButton = React.memo<IProps>(function StartAnalysisButton({
  onClick,
  isBordered = false,
}) {
  const { formatMessage } = useIntl();
  const history = useHistory();

  return (
    <Button
      view={isBordered ? 'secondary' : 'primary'}
      label={formatMessage(messages.button)}
      onClick={() => history.push(getRoutePath(routes.analysis))}
    />
  );
});
