import { User } from "@/types";

export type useAuthType = {
  user: User | null;
  isLoading: boolean;
  login: (body: { email: string; password: string }) => void;
};
