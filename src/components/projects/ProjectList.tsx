import { Link } from '@tanstack/react-router';
import type { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="divide-y divide-border/60">
      {projects.map((project, index) => (
        <Link
          key={project.id}
          to="/projects/$slug"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          params={{ slug: project.slug } as any}
          className="project-item group cursor-pointer transition-all duration-300 hover:bg-muted/30 hover:px-4 -mx-0 hover:-mx-0"
        >
          <div className="col-span-1 text-muted-foreground/40 text-xs tabular-nums">
            {String(index + 1).padStart(2, '0')}
          </div>

          <div className="col-span-7 lg:col-span-5">
            <h2 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-foreground/70 transition-colors duration-300">
              {project.title}
            </h2>
          </div>

          <div className="col-span-4 lg:col-span-3 hidden sm:block">
            <p className="text-muted-foreground/70 text-sm leading-relaxed group-hover:text-muted-foreground/50 transition-colors duration-300">
              {project.description}
            </p>
          </div>

          <div className="col-span-3 hidden lg:flex flex-wrap gap-x-3 gap-y-1 justify-end items-center">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground/40 group-hover:text-muted-foreground/30 transition-colors duration-300"
              >
                {tech}{techIndex < Math.min(project.technologies.length, 3) - 1 && <span className="ml-3 text-border">·</span>}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
};
