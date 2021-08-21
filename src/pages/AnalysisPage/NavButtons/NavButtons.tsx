import React from 'react';
import { defineMessages, useIntl } from 'react-intl';
import { useHistory } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { routes } from 'routes';
import { ButtonsContainer } from 'components/ButtonsContainer';
import { getRoutePath } from 'utils';

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
  canCalculate: boolean;
}

export const NavButtons: React.FC<IProps> = ({ canCalculate }) => {
  const { formatMessage } = useIntl();
  const history = useHistory();

  return (
    <ButtonsContainer>
      <Button
        view={'secondary'}
        label={formatMessage(messages.toMainButton)}
        onClick={() => history.push(getRoutePath(routes.main))}
      />
      <Button
        view={'primary'}
        disabled={!canCalculate}
        label={formatMessage(messages.runCalculateButton)}
        onClick={() => history.push(getRoutePath(routes.report))}
      />
    </ButtonsContainer>
  );
};
