import { Link, useParams } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { useProject } from '@/hooks/useProjects';

const ProjectDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { slug } = useParams({ from: '/projects/$slug' } as any) as { slug: string };
  const { t } = useTranslation();
  const { data: project, isLoading } = useProject(slug);

  if (isLoading) {
    return (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <p className="text-muted-foreground">{t('common.loading')}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <p className="text-muted-foreground mb-4">{t('common.error')}</p>
        <Link to="/projects" className="editorial-link text-foreground">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <Link 
        to="/projects" 
        className="editorial-link text-muted-foreground text-sm uppercase tracking-wide inline-block mb-12"
      >
        ← Back
      </Link>

      <div className="grid grid-cols-12 gap-8 lg:gap-16">
        <div className="col-span-12 lg:col-span-7">
          <h1 className="editorial-large text-foreground mb-6">
            {project.title}
          </h1>
          
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex gap-6">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="editorial-link text-foreground"
              >
                View live →
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="editorial-link text-muted-foreground"
              >
                Source
              </a>
            )}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <div className="space-y-8">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                Year
              </p>
              <p className="text-foreground">
                {new Date(project.createdAt).getFullYear()}
              </p>
            </div>

            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                Stack
              </p>
              <div className="space-y-1">
                {project.technologies.map((tech) => (
                  <p key={tech} className="text-foreground">{tech}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
