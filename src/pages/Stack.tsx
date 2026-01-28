import { useTranslation } from 'react-i18next';
import { useStack } from '@/hooks/useStack';
import { SkillPhilosophy } from '@/components/stack/SkillPhilosophy';

const Stack = () => {
  const { t } = useTranslation();
  const { data: stack, isLoading } = useStack();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl mb-16">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
          {t('stack.title')}
        </p>
        
        <h1 className="editorial-large text-foreground mb-8 max-w-2xl text-balance">
          Tools are just means to an end. Here's how I think about them.
        </h1>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">{t('common.loading')}</p>
      ) : stack ? (
        <SkillPhilosophy stack={stack} />
      ) : null}
    </div>
  );
};

export default Stack;
