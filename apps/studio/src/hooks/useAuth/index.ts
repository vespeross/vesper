import { useStoreDispatch } from "../useStoreDispatch";
import { useStoreSelector } from "../useStoreSelector";
import type { useAuthType } from "./types";
import { authService } from "@/services";
import { actions } from "@/store/slices/auth";

export const useAuth = (): useAuthType => {
  const user = useStoreSelector((state) => state.auth.user);
  const dispatch = useStoreDispatch();
  const isLoading = false;
  const login = async (body: { email: string; password: string }) => {
    try {
      const { data } = await authService.login(body);
      dispatch(
        actions.addUser({
          user: data.user,
          access_token: data.accessToken,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };
  return { user, isLoading, login };
};
