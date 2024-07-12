import React, { ReactNode, createContext, useContext, useState } from "react";

import api from "../utils/axiosConfig";

interface AuthContextType {
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return document.cookie.includes("token");
  });

  const login = async (email: string, password: string) => {
    if (!email || !password) throw new Error("Email and password are required");
    try {
      await api.post("/auth/login", { email, password });
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Failed to login:", error);
      throw new Error("Login failed");
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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
