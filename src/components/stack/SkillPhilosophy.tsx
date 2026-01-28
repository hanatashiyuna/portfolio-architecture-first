interface SkillPhilosophyProps {
  stack?: unknown;
}

interface TechCategory {
  title: string;
  description: string;
  core: string[];
  supporting: string[];
}

export const SkillPhilosophy = ({ stack: _stack }: SkillPhilosophyProps) => {
  const categories: TechCategory[] = [
    {
      title: 'Frontend',
      description: 'Component-driven architecture with minimal abstraction and predictable state flow.',
      core: ['React', 'NextJS', 'Tailwind CSS'],
      supporting: ['TanStack Query', 'React Hook Form', 'Zustand'],
    },
    {
      title: 'Backend & Data',
      description: 'Schema-first design, type safety, and performance-aware data modeling.',
      core: ['Node.js', 'Laravel', 'MySQL'],
      supporting: ['MongoDB', 'Zod', 'Postman'],
    },
    {
      title: 'DevOps & Delivery',
      description: 'Reproducible environments and stable deployment pipelines.',
      core: ['Docker', 'Git'],
      supporting: ['Rancher', 'MinIO'],
    },
    {
      title: 'Ecosystem & Tools',
      description: 'Supporting libraries and design systems.',
      core: ['Shadcn/UI', 'TypeScript'],
      supporting: ['Figma', 'Vite'],
    },
    {
      title: 'Learning & Exploration',
      description: 'Used for scripting, automation, and expanding problem-solving approaches.',
      core: ['Python'],
      supporting: ['Flask', 'C#'],
    },
  ];

  return (
    <div className="space-y-12">
      {categories.map((category, index) => (
        <div 
          key={category.title} 
          className={`${index > 0 ? 'pt-12 border-t border-border' : ''}`}
        >
          {/* Category Header */}
          <div className="flex items-baseline gap-4 mb-3">
            <span className="text-xs text-muted-foreground/60 tabular-nums font-medium">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-2xl lg:text-3xl text-foreground tracking-tight">
              {category.title}
            </h3>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground/70 text-sm leading-relaxed mb-6 pl-8 max-w-md">
            {category.description}
          </p>

          {/* Core Tools */}
          <div className="pl-8 mb-4">
            <p className="text-[10px] uppercase tracking-widest text-muted-foreground/50 font-medium mb-2">
              Core
            </p>
            <div className="flex flex-wrap gap-2">
              {category.core.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-foreground bg-muted rounded-md border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Supporting Tools */}
          {category.supporting.length > 0 && (
            <div className="pl-8">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground/40 font-medium mb-2">
                Supporting
              </p>
              <div className="flex flex-wrap gap-2">
                {category.supporting.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center px-2.5 py-1 text-xs text-muted-foreground bg-muted/40 rounded border border-border/50"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};