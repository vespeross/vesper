import * as React from "react";
import Project from "@/components/Project";
import { projects } from "./data";

export const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-5 gap-5 w-full">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};
