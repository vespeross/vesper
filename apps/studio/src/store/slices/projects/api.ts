import { customFetchBase } from "@/store/api";
import { ProjectType } from "@/types";
import { createApi } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "projectApi",
  baseQuery: customFetchBase,
  endpoints: (build) => ({
    getProjects: build.query<ProjectType[], void>({
      query() {
        return {
          url: "/project",
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        };
      },
    }),
  }),
});

export const { useGetProjectsQuery } = api;
