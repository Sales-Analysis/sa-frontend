import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Providers } from 'providers/Providers';
import { routes } from 'routes';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

export const App: React.FC = () => {
  return (
    <Providers>
      <Header />
      <Switch>
        {routes.map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact}>
            {component}
          </Route>
        ))}
      </Switch>
      <Footer />
    </Providers>
  );
};

export default App;
