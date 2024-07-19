import React, { ReactNode, createContext, useContext, useState } from "react";

import { AuthResponse, AuthService, LoginCredentials } from "../api/services/authService";
import errorMessages from "../utils/errorMessages";

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (credentials: LoginCredentials) => Promise<AuthResponse>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return document.cookie.includes("token");
  });

  const handleLogin = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    if (!credentials.email || !credentials.password) throw new Error("Email and password are required");
    try {
      const response = await AuthService.login(credentials);
      setIsAuthenticated(true);
      return response;
    } catch (error: any) {
      if (error.response?.data?.code) {
        throw new Error(errorMessages[error.response.data.code] || errorMessages.default);
      }
      throw new Error("Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await AuthService.logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
