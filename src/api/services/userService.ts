import api from "../axiosConfig";

enum BASE_URL {
  USER = "/user"
}

export interface UserResponse {
  message: string;
  user: {
    name: string;
    surname: string;
    email: string;
    password: string;
    isVerified: boolean;
    newEmail: string | null;
    emailVerificationCode: string | null;
    records: string[];
    avatarUrl: string | null;
  };
}

export interface SignUp {
  name: string;
  surname: string;
  email: string;
  password: string;
}

export const register = async ({ name, surname, email, password }: SignUp): Promise<UserResponse> => {
  const { data } = await api.post<UserResponse>(`${BASE_URL.USER}/register`, { name, surname, email, password });
  return data;
};
