interface SkillPhilosophyProps {
  stack?: unknown;
}

interface TechCategory {
  title: string;
  description: string;
  tools: string[];
}

export const SkillPhilosophy = ({ stack: _stack }: SkillPhilosophyProps) => {
  const categories: TechCategory[] = [
    {
      title: 'Frontend',
      description: 'Component-driven architecture with minimal abstraction and predictable state flow.',
      tools: ['React', 'NextJS', 'Tailwind CSS', 'TanStack'],
    },
    {
      title: 'Backend & Data',
      description: 'Schema-first design, type safety, and performance-aware data modeling.',
      tools: ['Node.js', 'Laravel', 'MySQL', 'MongoDB'],
    },
    {
      title: 'DevOps & Delivery',
      description: 'Reproducible environments and stable deployment pipelines.',
      tools: ['Docker', 'Git'],
    },
    {
      title: 'Ecosystem & Tools',
      description: 'Supporting libraries and tools.',
      tools: ['Shadcn/UI', 'Zustand', 'Zod'],
    },
    {
      title: 'Learning & Exploration',
      description: 'Used for scripting, automation, and expanding problem-solving approaches.',
      tools: ['Python'],
    },
  ];

  return (
    <div className="space-y-10">
      {categories.map((category, index) => (
        <div 
          key={category.title} 
          className={`${index > 0 ? 'pt-10 border-t border-border' : ''}`}
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
          <p className="text-muted-foreground/70 text-sm leading-relaxed mb-5 pl-8 max-w-md">
            {category.description}
          </p>

          {/* Tools as chips */}
          <div className="flex flex-wrap gap-2 pl-8">
            {category.tools.map((tool) => (
              <span
                key={tool}
                className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-foreground bg-muted/60 rounded-md border border-border/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};