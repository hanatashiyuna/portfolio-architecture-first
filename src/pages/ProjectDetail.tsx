import { Link, useLoaderData } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import type { Project } from '@/types';

const ProjectDetail = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { project } = useLoaderData({ from: '/projects/$slug' } as any) as { project: Project };

  if (!project) {
    return (
      <div className="px-6 md:px-12 lg:px-24 py-8">
        <p className="text-muted-foreground mb-4">{t('common.error')}</p>
        <Link to="/projects" className="editorial-link text-foreground inline-flex items-center gap-2">
          <ArrowLeft size={14} /> Back to projects
        </Link>
      </div>
    );
  }

  const year = new Date(project.createdAt).getFullYear();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-6 max-w-4xl mx-auto">
      {/* Back navigation */}
      <Link 
        to="/projects" 
        className="text-muted-foreground text-xs uppercase tracking-wide inline-flex items-center gap-1.5 hover:text-foreground transition-colors duration-300 mb-6"
      >
        <ArrowLeft size={12} />
        Back
      </Link>

      {/* Header: Title + Year */}
      <div className="flex items-baseline justify-between gap-4 mb-3">
        <h1 className="font-display text-2xl md:text-3xl text-foreground leading-tight">
          {project.title}
        </h1>
        <span className="text-muted-foreground text-sm tabular-nums shrink-0">
          {year}
        </span>
      </div>

      {/* Description + Stack row */}
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 sm:gap-6 mb-4">
        <p className="text-foreground/70 text-sm leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground/60 shrink-0">
          {project.technologies.map((tech, index) => (
            <span key={tech} className="inline-flex items-center">
              {tech}
              {index < project.technologies.length - 1 && (
                <span className="ml-2 text-border">|</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* Action links */}
      <div className="flex items-center gap-4 mb-6">
        {project.liveUrl && (
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:text-foreground/70 transition-colors duration-300"
          >
            <ExternalLink size={14} strokeWidth={1.5} />
            View live
          </a>
        )}
        {project.githubUrl && (
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github size={14} strokeWidth={1.5} />
            Source
          </a>
        )}
      </div>

      <Separator className="mb-6" />

      {/* Content sections - reserved for future */}
      <div className="space-y-6">
        {/* Overview section */}
        <section className="border border-border/50 rounded-sm p-4 bg-muted/20">
          <h2 className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
            Overview
          </h2>
          <p className="text-sm text-muted-foreground/60 italic">
            Project overview coming soon...
          </p>
        </section>

        {/* Features section */}
        <section className="border border-border/50 rounded-sm p-4 bg-muted/20">
          <h2 className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
            Key Features
          </h2>
          <p className="text-sm text-muted-foreground/60 italic">
            Feature list coming soon...
          </p>
        </section>

        {/* Technical notes section */}
        <section className="border border-border/50 rounded-sm p-4 bg-muted/20">
          <h2 className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
            Technical Notes
          </h2>
          <p className="text-sm text-muted-foreground/60 italic">
            Technical details coming soon...
          </p>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
