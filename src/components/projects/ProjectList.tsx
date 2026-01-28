import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
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
          to="/projects/$slug"
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          params={{ slug: project.slug } as any}
          className="group cursor-pointer grid grid-cols-12 gap-6 py-8 transition-colors duration-300 hover:bg-muted/30"
        >
          {/* Index number */}
          <div className="col-span-1 text-muted-foreground text-xs tabular-nums pt-2">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Title */}
          <div className="col-span-11 lg:col-span-5 flex items-baseline gap-3">
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-foreground group-hover:text-foreground/80 transition-colors duration-300">
              {project.title}
            </h2>
            <ArrowUpRight 
              size={20} 
              className="text-foreground/0 group-hover:text-foreground/60 transition-all duration-300 -translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0" 
              strokeWidth={1.5}
            />
          </div>

          {/* Description */}
          <div className="col-span-11 lg:col-span-3 lg:col-start-7 hidden sm:flex items-center ml-auto lg:ml-0">
            <p className="text-foreground/70 text-sm leading-relaxed max-w-[280px]">
              {project.description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="col-span-3 hidden lg:flex flex-wrap gap-2 justify-end items-center">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs text-muted-foreground px-2 py-0.5 bg-muted/50 rounded"
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
