import { useStoreSelector } from "../useStoreSelector";
import type { useAuthType } from "./types";

export const useAuth = (): useAuthType => {
  const user = useStoreSelector((state) => state.auth.user);
  const isLoading = false;
  return { user, isLoading };
};
