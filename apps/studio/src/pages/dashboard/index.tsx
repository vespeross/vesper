import { useGetProjectsQuery } from "@/store/slices/projects";

export const Dashboard: React.FC = () => {
  const { data, error, isLoading } = useGetProjectsQuery();
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-semibold text-center text-primary">
        Welcome to Acme Inc
      </h1>
      <p className="text-lg text-center text-muted">
        Your dashboard for all things Acme Inc
      </p>
      {isLoading && <p>loading</p>}
      <p>{JSON.stringify(data, null, 2)}</p>
      <p>{JSON.stringify(error, null, 2)}</p>
    </div>
  );
};
