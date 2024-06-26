import { User } from "@/types";

export type AuthSliceState = {
  user: User | null;
  access_token: string | null;
};

export type AddUserPayload = {
  user: User;
  access_token: string;
};

export type LoginPayload = {
  email: string;
  password: string;
};

export type LoginAPIResponse = {
  body: LoginResponse;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};
