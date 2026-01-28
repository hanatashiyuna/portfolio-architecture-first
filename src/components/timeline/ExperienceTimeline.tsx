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

  // Sort experiences: current first, then by start date descending
  const sortedExperiences = [...experiences].sort((a, b) => {
    if (!a.endDate && b.endDate) return -1;
    if (a.endDate && !b.endDate) return 1;
    return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
  });

  const totalItems = sortedExperiences.length;

  return (
    <div className="relative pl-8">
      {/* Direction indicator */}
      <div className="flex items-center gap-2 mb-8 -ml-8">
        <span className="text-xs font-medium text-accent uppercase tracking-widest pl-2.5">
          Present
        </span>
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
      </div>

      <div className="timeline-line-gradient" />

      <div className="space-y-12">
        {sortedExperiences.map((exp, index) => {
          const fadeOpacity = 1 - (index / totalItems) * 0.4;
          const isCurrentRole = isActive(exp);

          return (
            <div 
              key={exp.id} 
              className="relative animate-fade-in"
              style={{ 
                opacity: fadeOpacity,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Timeline dot */}
              {isCurrentRole ? (
                <div className="timeline-dot-current">
                  <span className="timeline-dot-pulse" />
                </div>
              ) : (
                <div 
                  className="timeline-dot-past"
                  style={{ opacity: fadeOpacity }}
                />
              )}

              <div>
                <div className="flex flex-wrap items-baseline gap-3 mb-1">
                  <h3 className={`font-display text-xl ${
                    isCurrentRole ? 'text-foreground' : 'text-foreground/80'
                  }`}>
                    {exp.position}
                  </h3>
                  <span className={`text-xs ${
                    isCurrentRole 
                      ? 'text-accent font-medium uppercase tracking-wide' 
                      : 'text-muted-foreground'
                  }`}>
                    {isCurrentRole ? (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Now
                      </span>
                    ) : (
                      `${formatDate(exp.startDate)} — ${formatDate(exp.endDate!)}`
                    )}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-3">
                  {exp.company}
                </p>
                <p className={`text-sm leading-relaxed mb-4 ${
                  isCurrentRole ? 'text-foreground/80' : 'text-foreground/60'
                }`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs ${
                        isCurrentRole ? 'text-muted-foreground' : 'text-muted-foreground/70'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Narrative ending */}
      <div className="relative mt-16 -ml-8 pl-8">
        <div className="timeline-dot-origin" />
        <p className="text-sm text-muted-foreground/60 italic font-display">
          Where it all began — curiosity, late nights, and a lot of Stack Overflow.
        </p>
      </div>
    </div>
  );
};
