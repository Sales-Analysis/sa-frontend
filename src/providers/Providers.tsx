import React, { PropsWithChildren } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { Theme } from '@consta/uikit/Theme';
import { client } from 'apollo';
import { presetDefault } from 'theme/presets/presetDefault';
import { LanguageProvider } from './LanguageProvider';

interface IProps {
  className?: string;
}

export const Providers: React.FC<PropsWithChildren<IProps>> = ({
  className,
  children,
}) => {
  return (
    <LanguageProvider>
      <Theme preset={presetDefault} className={className}>
        <ApolloProvider client={client}>
          <Router>{children}</Router>
        </ApolloProvider>
      </Theme>
    </LanguageProvider>
  );
};
