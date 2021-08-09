import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { Button } from '@consta/uikit/Button';

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

  return (
    <Button
      view={isBordered ? 'secondary' : 'primary'}
      label={formatMessage(messages.button)}
      onClick={onClick}
    />
  );
});
