import type { Project } from "@/types";

export type UseProjectType = {
  project: Project | null;
  isLoading: boolean;
  isError: boolean;
};
