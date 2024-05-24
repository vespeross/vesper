import { api } from "@/store/api";
import type { IsNewInstallResponse } from "./types";

const generalApi = api.injectEndpoints({
  endpoints: (build) => ({
    new: build.query<IsNewInstallResponse, void>({
      query: () => ({
        url: "/init",
      }),
      
    }),
    health: build.query({
      query: () => ({
        url: "/health",
      }),
    }),
  }),
});

export const { useNewQuery } = generalApi;
