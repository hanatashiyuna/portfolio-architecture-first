import { useTranslation } from 'react-i18next';
import { useProjects } from '@/hooks/useProjects';
import { ProjectList } from '@/components/projects/ProjectList';

const Projects = () => {
  const { t } = useTranslation();
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="flex items-baseline justify-between mb-16">
        <h1 className="font-display text-xl text-foreground">
          {t('projects.title')}
        </h1>
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          {projects?.length || 0} projects
        </p>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">{t('common.loading')}</p>
      ) : projects ? (
        <ProjectList projects={projects} />
      ) : null}
    </div>
  );
};

export default Projects;
