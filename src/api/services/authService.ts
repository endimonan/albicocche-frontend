import api from "../axiosConfig";

enum BASE_URL {
  AUTH = "/auth"
}

export interface AuthResponse {
  message: string;
  token: string;
  code: string;
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

export const AuthService = {
  login,
  logout
};
