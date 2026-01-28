import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useProject } from '@/hooks/useProjects';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const { data: project, isLoading } = useProject(slug || '');

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-muted-foreground">{t('common.loading')}</p>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-16">
        <p className="text-muted-foreground">{t('common.error')}</p>
        <Button asChild variant="outline" className="mt-4">
          <Link to="/projects">Back to Projects</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Button asChild variant="ghost" size="sm">
            <Link to="/projects">← Back</Link>
          </Button>
        </div>

        <div className="flex items-start justify-between mb-4">
          <h1 className="text-3xl font-bold text-foreground">{project.title}</h1>
          {project.featured && (
            <Badge variant="secondary">{t('projects.featured')}</Badge>
          )}
        </div>

        <p className="text-muted-foreground mb-6">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex gap-4">
          {project.liveUrl && (
            <Button asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
