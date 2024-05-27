import * as React from "react";
import { useParams } from "react-router-dom";

export const Project: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  return <div>Project {projectId}</div>;
};
