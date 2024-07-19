import React, { ReactNode, createContext, useContext, useState } from "react";

import api from "../api/axiosConfig";

enum BASE_URL {
  AUTH = "/auth"
}

interface AuthContextType {
  isAuthenticated: boolean;
  handleLogin: (credentials: LoginCredentials) => Promise<AuthResponse>;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export interface AuthResponse {
  message: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

const login = async ({ email, password }: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>(`${BASE_URL.AUTH}/login`, { email, password });
  return data;
};

const logout = async (): Promise<void> => {
  await api.post(`${BASE_URL.AUTH}/logout`);
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return document.cookie.includes("token");
  });

  const handleLogin = async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const { email, password } = credentials;
    if (!email || !password) throw new Error("Email and password are required");
    try {
      const response = await login(credentials);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      console.error("Failed to login:", error);
      throw new Error("Login failed");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
