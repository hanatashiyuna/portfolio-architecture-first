import { useTranslation } from 'react-i18next';
import { Link, useLoaderData, useSearch } from '@tanstack/react-router';
import { ProjectList } from '@/components/projects/ProjectList';
import type { ProjectsSearch } from '@/routes/projects/index';

const Projects = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { projects } = useLoaderData({ from: '/projects' } as any) as { projects: any[] };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const search = useSearch({ from: '/projects' } as any) as ProjectsSearch;

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-16">
        <h1 className="font-display text-xl text-foreground">
          {t('projects.title')}
        </h1>
        
        <div className="flex items-center gap-4">
          {/* Filter buttons using type-safe Links */}
          <div className="flex gap-2">
            <Link
              to="/projects"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              search={{ filter: 'all' } as any}
              className={`text-xs uppercase tracking-wide px-3 py-1.5 transition-colors ${
                search.filter === 'all' || !search.filter
                  ? 'text-foreground bg-muted'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All
            </Link>
            <Link
              to="/projects"
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              search={{ filter: 'featured' } as any}
              className={`text-xs uppercase tracking-wide px-3 py-1.5 transition-colors ${
                search.filter === 'featured'
                  ? 'text-foreground bg-muted'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Featured
            </Link>
          </div>
          
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {projects?.length || 0} projects
          </p>
        </div>
      </div>

      {projects ? (
        <ProjectList projects={projects} />
      ) : null}
    </div>
  );
};

export default Projects;
