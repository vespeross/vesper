import { useStoreSelector } from "../useStoreSelector";
import type { useUserType } from "./types";

export const useUser = (): useUserType => {
  const user = useStoreSelector((state) => state.auth.user);
  const isAuthenticated = useStoreSelector((state) => state.auth.access_token) !== null;
  return { user, isAuthenticated };
};
