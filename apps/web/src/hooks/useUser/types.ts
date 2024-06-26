import { User } from "@/types";

export type useUserType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  logOut: () => void;
};
