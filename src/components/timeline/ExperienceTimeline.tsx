import type { Experience } from '@/types';

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export const ExperienceTimeline = ({ experiences }: ExperienceTimelineProps) => {
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
    <div className="relative">
      <div className="space-y-10">
        {sortedExperiences.map((exp, index) => {
          const fadeOpacity = 1 - (index / totalItems) * 0.4;
          const isCurrentRole = isActive(exp);

          return (
            <div 
              key={exp.id} 
              className="grid grid-cols-[120px_24px_1fr] gap-x-4 animate-fade-in"
              style={{ 
                opacity: fadeOpacity,
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* Left column: Time indicators */}
              <div className="text-right pt-0.5">
                {isCurrentRole ? (
                  <span className="text-xs font-medium text-accent uppercase tracking-widest">
                    Present
                  </span>
                ) : (
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <div>{formatDate(exp.startDate)}</div>
                    <div className="text-muted-foreground/50">—</div>
                    <div>{formatDate(exp.endDate!)}</div>
                  </div>
                )}
              </div>

              {/* Middle column: Timeline line and dots */}
              <div className="relative flex justify-center">
                {/* Vertical line */}
                <div 
                  className="absolute top-2 bottom-0 w-px"
                  style={{
                    background: isCurrentRole 
                      ? 'linear-gradient(to bottom, hsl(var(--accent)), hsl(var(--border)))'
                      : 'hsl(var(--border) / 0.5)'
                  }}
                />
                {/* Dot */}
                {isCurrentRole ? (
                  <div className="relative w-3 h-3 rounded-full bg-accent mt-1 z-10">
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" style={{ animationDuration: '2s' }} />
                  </div>
                ) : (
                  <div 
                    className="w-2 h-2 rounded-full border border-muted-foreground/30 bg-background mt-1.5 z-10"
                    style={{ opacity: fadeOpacity }}
                  />
                )}
              </div>

              {/* Right column: Content */}
              <div className="pb-2">
                <h3 className={`font-display text-xl mb-1 ${
                  isCurrentRole ? 'text-foreground' : 'text-foreground/80'
                }`}>
                  {exp.position}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">
                  {exp.company}
                </p>
                <p className={`text-sm leading-relaxed mb-3 ${
                  isCurrentRole ? 'text-foreground/80' : 'text-foreground/60'
                }`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1">
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

        {/* Narrative ending */}
        <div className="grid grid-cols-[120px_24px_1fr] gap-x-4">
          <div className="text-right pt-0.5">
            <p className="text-xs text-muted-foreground leading-relaxed">
              2022
            </p>
          </div>
          <div className="relative flex justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground mt-1.5" />
          </div>
          <p className="text-sm text-muted-foreground italic font-display">
            Where it all began — curiosity, late nights, and a lot of Stack Overflow.
          </p>
        </div>
      </div>
    </div>
  );
};
