import { useTranslation } from 'react-i18next';
import { useStack } from '@/hooks/useStack';
import { StackCategory } from '@/components/stack/StackCategory';
import type { StackItem } from '@/types';

const Stack = () => {
  const { t } = useTranslation();
  const { data: stack, isLoading } = useStack();

  const groupByCategory = (items: StackItem[]) => {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, StackItem[]>);
  };

  const categories: Array<{ key: string; labelKey: string }> = [
    { key: 'frontend', labelKey: 'stack.categories.frontend' },
    { key: 'backend', labelKey: 'stack.categories.backend' },
    { key: 'database', labelKey: 'stack.categories.database' },
    { key: 'devops', labelKey: 'stack.categories.devops' },
    { key: 'tools', labelKey: 'stack.categories.tools' },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">{t('stack.title')}</h1>
      
      {isLoading ? (
        <p className="text-muted-foreground">{t('common.loading')}</p>
      ) : stack ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map(({ key, labelKey }) => {
            const grouped = groupByCategory(stack);
            const items = grouped[key] || [];
            if (items.length === 0) return null;
            return (
              <StackCategory
                key={key}
                title={t(labelKey)}
                items={items}
              />
            );
          })}
        </div>
      ) : (
        <p className="text-muted-foreground">{t('common.error')}</p>
      )}
    </div>
  );
};

export default Stack;
