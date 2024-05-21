import { useStoreSelector } from "../useStoreSelector";
import type { useUserType } from "./types";

export const useUser = (): useUserType => {
  const user = useStoreSelector((state) => state.auth.user);
  return { user };
};
