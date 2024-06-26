import type { UseInvitesType } from "./types";
import { useStoreSelector } from "../useStoreSelector";
import { useGetInvitesQuery } from "@/store/slices/invitation";

export const useInvites = (): UseInvitesType => {
  const { isLoading, isFetching, isError } = useGetInvitesQuery();
  const loading = isLoading || isFetching;
  const { invites } = useStoreSelector((state) => state.invitation);
  return {
    invites,
    isLoading: loading,
    isError,
  };
};
