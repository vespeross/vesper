import { useProjects, useUser } from "@/hooks";

export const Dashboard: React.FC = () => {
  const { projects, isLoading } = useProjects();
  const { user } = useUser();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold text-center text-primary">
        vesper
      </h1>
      {isLoading && <p>loading</p>}
      <pre>{JSON.stringify(projects, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};
