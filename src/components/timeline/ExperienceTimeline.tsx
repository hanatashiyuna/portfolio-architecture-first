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

  const isActive = (exp: Experience) => !exp.endDate;

  return (
    <div className="relative pl-8">
      <div className="timeline-line" />

      <div className="space-y-12">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative">
            <div className={`timeline-dot ${isActive(exp) ? 'timeline-dot-active' : ''}`} />

            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-display text-xl text-foreground">
                  {exp.position}
                </h3>
                <span className="text-xs text-muted-foreground">
                  {formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : t('common.present')}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                {exp.company}
              </p>
              <p className="text-foreground/80 text-sm leading-relaxed mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-12">
        <div className="timeline-dot" />
        <p className="text-xs text-muted-foreground uppercase tracking-wide">
          2023 — Started
        </p>
      </div>
    </div>
  );
};
