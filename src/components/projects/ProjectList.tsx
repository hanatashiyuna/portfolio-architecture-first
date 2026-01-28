import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectListProps {
  projects: Project[];
}

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <div className="divide-y divide-border/50">
      {projects.map((project, index) => {
        // Subtle vertical rhythm variation
        const paddingVariant = index % 3 === 0 ? 'py-10' : index % 3 === 1 ? 'py-8' : 'py-9';
        
        return (
          <Link
            key={project.id}
            to="/projects/$slug"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            params={{ slug: project.slug } as any}
            className={`project-item-refined group cursor-pointer grid grid-cols-12 gap-4 ${paddingVariant} transition-all duration-500 ease-out hover:bg-muted/20`}
          >
            <div className="col-span-1 text-muted-foreground/30 text-xs tabular-nums pt-1 transition-colors duration-500">
              {String(index + 1).padStart(2, '0')}
            </div>

            <div className="col-span-7 lg:col-span-5 flex items-baseline gap-3">
              <h2 className="font-display text-2xl lg:text-3xl text-foreground group-hover:text-foreground/70 transition-colors duration-500">
                {project.title}
              </h2>
              <ArrowUpRight 
                size={18} 
                className="text-muted-foreground/0 group-hover:text-muted-foreground/50 transition-all duration-500 -translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0" 
                strokeWidth={1.5}
              />
            </div>

            <div className="col-span-4 lg:col-span-3 hidden sm:flex items-center">
              <p className="text-muted-foreground/60 text-sm leading-relaxed group-hover:text-muted-foreground/40 transition-colors duration-500">
                {project.description}
              </p>
            </div>

            <div className="col-span-3 hidden lg:flex flex-wrap gap-x-3 gap-y-1 justify-end items-center">
              {project.technologies.slice(0, 3).map((tech, techIndex) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground/35 group-hover:text-muted-foreground/25 transition-colors duration-500"
                >
                  {tech}{techIndex < Math.min(project.technologies.length, 3) - 1 && <span className="ml-3 text-border/50">·</span>}
                </span>
              ))}
            </div>
          </Link>
        );
      })}
    </div>
  );
};
