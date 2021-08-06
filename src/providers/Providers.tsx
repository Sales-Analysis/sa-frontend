import React, { PropsWithChildren, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Theme } from '@consta/uikit/Theme';
import { client } from 'apollo';
import { presetDefault } from 'theme/presets/presetDefault';
import { LanguageProvider } from './LanguageProvider';

export const Providers: React.FC<PropsWithChildren<ReactNode>> = ({ children }) => {
  return (
    <LanguageProvider>
      <Theme preset={presetDefault}>
        <ApolloProvider client={client}>
          <Router>{children}</Router>
        </ApolloProvider>
      </Theme>
    </LanguageProvider>
  );
};
