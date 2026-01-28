import { useTranslation } from 'react-i18next';
import type { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
  const { t } = useTranslation();

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={exp.id} className="relative pl-12">
            {/* Timeline dot */}
            <div className="absolute left-2 top-2 w-4 h-4 rounded-full bg-primary border-2 border-background" />

            {/* Content card */}
            <div className="bg-card border border-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-semibold text-foreground">{exp.position}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">
                  {formatDate(exp.startDate)} - {exp.endDate ? formatDate(exp.endDate) : t('common.present')}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
