import { interceptor } from "@/lib";
import { User } from "@/types";

type LoginResponse = {
  user: User;
  accessToken: string;
  refreshToken: string;
};
const login = (body: { email: string; password: string }) =>
  interceptor.post<LoginResponse>("/auth/login", body);

const signup = (body: { email: string; password: string }) =>
  interceptor.put("/auth/signup", {
    ...body,
    strategy: "LOCAL",
  });

export const authService = {
  login,
  signup,
};