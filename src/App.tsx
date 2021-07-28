import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Providers } from 'providers/Providers';
import { routes } from './routes';

import './App.css';

export const App: React.FC = () => {
  return (
    <Providers>
      <Switch>
        {routes.map(({path, component, exact = false}) =>
          <Route path={path} exact={exact}>{component}</Route>
        )}
      </Switch>
    </Providers>
  );
};

export default App;
