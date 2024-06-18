// src/context/WrappedProviders.tsx
import React from 'react';
import { CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import i18n from '../i18n';

const queryClient = new QueryClient();

interface WrappedProvidersProps {
  children: React.ReactNode;
}

const WrappedProviders: React.FC<WrappedProvidersProps> = ({ children }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <CssBaseline />
          {children}
        </BrowserRouter>
      </QueryClientProvider>
    </I18nextProvider>
  );
};

export default WrappedProviders;
