import { api } from "@/store/api";
import { ProjectType } from "@/types";

const propjectApi = api.injectEndpoints({
  endpoints: (build) => ({
    getProjects: build.query<ProjectType[], void>({
      query: () => "/projects",
    }),
  }),
});

export const { useGetProjectsQuery } = propjectApi;
