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
      description: 'Tools for designing systems and solving problems before writing code.',
      tools: ['TypeScript', 'PostgreSQL', 'MongoDB'],
    },
    {
      title: 'Building',
      description: 'The craft of creating interfaces that feel natural and responsive.',
      tools: ['React', 'Tailwind CSS', 'Node.js'],
    },
    {
      title: 'Shipping',
      description: 'Infrastructure that makes deployment boring and reliable.',
      tools: ['Docker', 'AWS', 'Git'],
    },
    {
      title: 'Learning',
      description: 'Currently exploring and adding to the toolkit.',
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
