import type { StackItem } from '@/types';
import { Progress } from '@/components/ui/progress';

interface StackCategoryProps {
  title: string;
  items: StackItem[];
}

export const StackCategory = ({ title, items }: StackCategoryProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
      <div className="space-y-3">
        {items.map((item) => (
          <div key={item.id} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-foreground">{item.name}</span>
              <span className="text-muted-foreground">{item.proficiency}%</span>
            </div>
            <Progress value={item.proficiency} className="h-2" />
          </div>
        ))}
      </div>
    </div>
  );
};
