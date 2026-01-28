import { useTranslation } from 'react-i18next';
import { useProjects } from '@/hooks/useProjects';
import { ProjectCard } from '@/components/projects/ProjectCard';

const Projects = () => {
  const { t } = useTranslation();
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">{t('projects.title')}</h1>
      
      {isLoading ? (
        <p className="text-muted-foreground">{t('common.loading')}</p>
      ) : projects ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-muted-foreground">{t('common.error')}</p>
      )}
    </div>
  );
};

export default Projects;
