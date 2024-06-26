import * as React from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/types";

export const AllProjects: React.FC<{ projects: Project[] }> = ({
  projects,
}) => {
  return (
    <>
      {projects.map((project) => (
        <ProjectCard key={project.cid} project={project} />
      ))}
    </>
  );
};
