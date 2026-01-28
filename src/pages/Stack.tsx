import { useTranslation } from 'react-i18next';
import { useStack } from '@/hooks/useStack';
import { SkillPhilosophy } from '@/components/stack/SkillPhilosophy';

const Stack = () => {
  const { t } = useTranslation();
  const { data: stack, isLoading } = useStack();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-4xl mb-12">
        <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
          {t('stack.title')}
        </p>
        
        <h1 className="editorial-large text-foreground mb-4 max-w-2xl text-balance">
          These are tools I've shipped real products with.
        </h1>
        <p className="text-muted-foreground text-base max-w-xl">
          Tools matter less than the decisions behind them. I pick what works, not what's trending.
        </p>
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
