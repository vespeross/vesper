import { User } from "@/types";

export type UserSliceState = {
  user: User | null;
  access_token: string | null;
};

export type AddUserPayload = {
  user: User;
  access_token: string;
};
