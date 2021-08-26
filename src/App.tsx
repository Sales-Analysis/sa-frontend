import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Providers } from 'providers/Providers';
import { routes } from 'routes';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

import styles from './App.module.css';

export const App: React.FC = () => {
  return (
    <Providers className={styles.root}>
      <Header />
      <Switch>
        {Object.values(routes).map(({ path, component, exact = false }) => (
          <Route key={path} path={path} exact={exact}>
            {component}
          </Route>
        ))}
        <Route render={() => <Redirect to={{ pathname: '/' }} />} />
      </Switch>
      <Footer />
    </Providers>
  );
};

export default App;
