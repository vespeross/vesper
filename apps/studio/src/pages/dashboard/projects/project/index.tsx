import * as React from "react";
import { useProject } from "@/hooks";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteProjectMutation } from "@/store/slices/projects";

export const Project: React.FC = () => {
  const { cid } = useParams<{ cid: string }>();
  const { isLoading, project } = useProject(cid!);
  const [deleteProject, { isLoading: isProjectDeleting }] =
    useDeleteProjectMutation();
  const navigate = useNavigate();
  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
      Project
      <pre>{JSON.stringify(project, null, 4)}</pre>
      <button
        onClick={async () => {
          if (!cid) return;
          if (isProjectDeleting) return;
          try {
            await deleteProject(cid!);
            navigate("/dashboard/projects");
          } catch (error) {
            // Handle error
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};
