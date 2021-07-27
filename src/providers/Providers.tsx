import React, { PropsWithChildren, ReactNode } from 'react';
import { LocaleProvider } from './LocaleProvider';

export const Providers: React.FC<PropsWithChildren<ReactNode>> = ({children}) => {
  return (
    <LocaleProvider>
      {children}
    </LocaleProvider>
  );
};
