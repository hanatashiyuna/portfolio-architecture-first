import type { StackItem } from '@/types';

interface SkillPhilosophyProps {
  stack: StackItem[];
}

interface PhilosophyGroup {
  title: string;
  description: string;
  tools: string[];
}

export const SkillPhilosophy = ({ stack }: SkillPhilosophyProps) => {
  // Group skills by philosophy/approach rather than category
  const philosophies: PhilosophyGroup[] = [
    {
      title: 'Thinking',
      description: 'Type systems catch bugs before runtime. Schema design determines query performance.',
      tools: ['TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Building',
      description: 'Component boundaries matter. CSS-in-JS adds complexity I rarely need.',
      tools: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'Shipping',
      description: 'If deploys are scary, the pipeline is broken. Containers make environments reproducible.',
      tools: ['Docker', 'AWS', 'Git'],
    },
    {
      title: 'Learning',
      description: 'Scripting, data work, ML basics. Not production-ready yet.',
      tools: ['Python'],
    },
  ];

  return (
    <div className="space-y-16">
      {philosophies.map((philosophy, index) => (
        <div key={philosophy.title} className="skill-category">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-4">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="font-display text-2xl text-foreground mb-2">
                {philosophy.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {philosophy.description}
              </p>
            </div>

            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-wrap gap-x-8 gap-y-3">
                {philosophy.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-foreground text-lg font-display"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
