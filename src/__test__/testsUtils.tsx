import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { LanguageProvider } from 'providers/LanguageProvider';

const AllTheProviders: FC = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
};

export const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });
