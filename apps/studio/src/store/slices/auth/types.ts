import { User } from "@/types";

export type AuthSliceState = {
  user: User | null;
  access_token: string | null;
  isAuthenticating: boolean;
  isLoading: boolean;
  error: string | null;
};

export type AddUserPayload = {
  user: User;
  access_token: string;
};
