import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import i18n from "../i18n";
import { AuthProvider } from "./AuthContext";
import { ThemeProviderWrapper } from "./ThemeContext";

const queryClient = new QueryClient();

interface WrappedProvidersProps {
  children: React.ReactNode;
}

const WrappedProviders: React.FC<WrappedProvidersProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProviderWrapper>
          <I18nextProvider i18n={i18n}>
            <BrowserRouter>
              <CssBaseline />
              {children}
            </BrowserRouter>
          </I18nextProvider>
        </ThemeProviderWrapper>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default WrappedProviders;
