import { useStoreSelector } from "../useStoreSelector";
import type { useUserType } from "./types";

export const useUser = (): useUserType => {
  const user = useStoreSelector((state) => state.auth.user);
  const isLoading = false;
  return { user, isLoading };
};
