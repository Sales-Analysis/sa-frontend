import React, { PropsWithChildren, ReactNode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import { LanguageProvider } from './LanguageProvider';

export const Providers: React.FC<PropsWithChildren<ReactNode>> = ({children}) => {
  return (
    <LanguageProvider>
      <Theme preset={presetGpnDefault}>
        <Router>
          {children}
        </Router>
      </Theme>
    </LanguageProvider>
  );
};
