import api from "../axiosConfig";

const BASE_URL = "/api/auth"

export interface AuthResponse {
  message: string;
  token: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<AuthResponse> => {
  const { data } = await api.post<AuthResponse>(`${BASE_URL}/login`, credentials);
  return data;
};
