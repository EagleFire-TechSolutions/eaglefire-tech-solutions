import { projects } from "@/data/project";
import ProjectCard from "./projectCard";

export default function ProjectList() {
  return (
    <div className="projects-list">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}