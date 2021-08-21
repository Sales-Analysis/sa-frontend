import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { routes } from 'routes';
import { ButtonsContainer } from 'components/ButtonsContainer';
import { getRoutePath } from 'utils';

const messages = defineMessages({
  toSettings: {
    id: 'pages.report.button.toSettings',
    defaultMessage: 'Назад к настройкам',
  },
});

export const NavButtons: React.FC = () => {
  const { formatMessage } = useIntl();
  const history = useHistory();

  return (
    <ButtonsContainer>
      <Button
        view={'secondary'}
        label={formatMessage(messages.toSettings)}
        onClick={() => history.push(getRoutePath(routes.analysis))}
      />
    </ButtonsContainer>
  );
};
