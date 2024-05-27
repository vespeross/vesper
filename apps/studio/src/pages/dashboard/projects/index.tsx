import { useGetProjectsQuery } from "@/store/slices/projects";
import { AllProjects } from "./components/AllProjects";
import { Icons } from "@/components/ui/icons";
import { CreateProjectCard } from "./components/CreateProjectCard";
import { useStoreSelector } from "@/hooks";

export const Projects: React.FC = () => {
  const { isLoading } = useGetProjectsQuery();
  const { projects } = useStoreSelector((state) => state.projects);
  return (
    <div
      className={
        isLoading
          ? "flex justify-center items-center min-h-[calc(100vh-4rem)]"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 w-full"
      }
    >
      {isLoading ? (
        <Icons.spinner className="animate-spin h-5 w-5" />
      ) : (
        <>
          <CreateProjectCard />
          {projects && <AllProjects projects={projects} />}
        </>
      )}
    </div>
  );
};
