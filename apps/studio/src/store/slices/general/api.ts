import { api } from "@/store/api";
import type { IsNewInstallResponse } from "./types";
import { actions } from "./slice";
import { RootState } from "@/store";

const generalApi = api.injectEndpoints({
  endpoints: (build) => ({
    new: build.query<IsNewInstallResponse, void>({
      query: () => ({
        url: "/init",
      }),
      async onQueryStarted(_args, { dispatch, queryFulfilled, getState }) {
        const state = getState() as RootState;
        try {
          const { data } = await queryFulfilled;
          if (data.body.isNewInstall !== state.general.isNewInstall) {
            dispatch(actions.toggleInstall());
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
    health: build.query({
      query: () => ({
        url: "/health",
      }),
    }),
  }),
});

export const { useNewQuery } = generalApi;
