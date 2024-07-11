import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";

import i18n from "../i18n";
import { theme } from "../theme/theme";

const queryClient = new QueryClient();

interface WrappedProvidersProps {
  children: React.ReactNode;
}

const WrappedProviders: React.FC<WrappedProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CssBaseline />
            {children}
          </BrowserRouter>
        </QueryClientProvider>
      </I18nextProvider>
    </ThemeProvider>
  );
};

export default WrappedProviders;
