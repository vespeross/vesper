import { useGetProjectsQuery } from "@/store/slices/projects";
import { useStoreSelector } from "../useStoreSelector";
import type { UseProjectsType } from "./types";

export const useProjects = (): UseProjectsType => {
  const { isLoading } = useGetProjectsQuery();
  const { projects } = useStoreSelector((state) => state.projects);

  return {
    projects,
    isLoading,
  };
};
