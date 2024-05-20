import { User } from "@/types";

export type AuthSliceState = {
  user: User | null;
  access_token: string | null;
};

export type AddUserPayload = {
  user: User;
  access_token: string;
};
