import { useProjects } from "@/hooks";
import * as React from "react";
import { useParams } from "react-router-dom";

export const Project: React.FC = () => {
  const { cid } = useParams<{ cid: string }>();
  const { isLoading, projects } = useProjects();
  if (isLoading) return <div>Loading...</div>;
  const project = projects.find((project) => project.cid === cid);
  if (!project) return <div>Project not found for {cid}</div>;
  return (
    <div>
      Project
      <pre>{JSON.stringify(project, null, 4)}</pre>
    </div>
  );
};
