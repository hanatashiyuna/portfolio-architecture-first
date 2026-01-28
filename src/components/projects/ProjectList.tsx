import { Link } from 'react-router-dom';
import type { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="divide-y divide-border">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to={`/projects/${project.slug}`}
          className="project-item group cursor-pointer"
        >
          <div className="col-span-1 text-muted-foreground text-sm">
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="col-span-7 lg:col-span-5">
            <h2 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-muted-foreground transition-colors">
              {project.title}
            </h2>
          </div>

          <div className="col-span-4 lg:col-span-3 hidden sm:block">
            <p className="text-muted-foreground text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="col-span-3 hidden lg:flex flex-wrap gap-2 justify-end">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};
