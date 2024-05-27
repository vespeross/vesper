import { useGetProjectsQuery } from "@/store/slices/projects";
import type { UseProjectType } from "./types";

export const useProject = (projectId: string): UseProjectType => {
  const { data, isLoading, isError } = useGetProjectsQuery();
  const project =
    data?.body.projects.find((project) => project.cid === projectId) || null;
  if (!project) {
    return {
      project: null,
      isLoading,
      isError: true,
    };
  }
  return { project, isLoading, isError };
};
