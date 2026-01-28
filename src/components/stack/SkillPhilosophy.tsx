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
    <div className="space-y-8">
      {categories.map((category, index) => (
        <div key={category.title} className="grid grid-cols-12 gap-4 py-4 border-t border-border/50 first:border-t-0">
          <div className="col-span-12 lg:col-span-5">
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-xs text-muted-foreground/50 tabular-nums">
                {String(index + 1).padStart(2, '0')}.
              </span>
              <h3 className="font-display text-lg text-foreground">
                {category.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed pl-7">
              {category.description}
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 flex items-center">
            <div className="flex flex-wrap gap-x-6 gap-y-1 pl-7 lg:pl-0">
              {category.tools.map((tool, toolIndex) => (
                <span
                  key={tool}
                  className="text-foreground text-base"
                >
                  {tool}
                  {toolIndex < category.tools.length - 1 && (
                    <span className="text-muted-foreground/30 ml-6">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};