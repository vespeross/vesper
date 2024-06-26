import { useStoreSelector, useStoreDispatch } from "@/hooks";
import type { useUserType } from "./types";
import { actions, useGetMeQuery } from "@/store/slices/auth";

export const useUser = (): useUserType => {
  const { isLoading } = useGetMeQuery({});
  const user = useStoreSelector((state) => state.auth.user);
  const dispatch = useStoreDispatch();
  const isAuthenticated =
    useStoreSelector((state) => state.auth.access_token) !== null;
  const logOut = () => {
    dispatch(actions.removeUser());
  };
  return { user, isAuthenticated, logOut, isLoading };
};
