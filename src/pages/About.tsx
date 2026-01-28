import { useTranslation } from 'react-i18next';
import { useExperiences } from '@/hooks/useExperiences';
import { ExperienceTimeline } from '@/components/timeline/ExperienceTimeline';

const About = () => {
  const { t } = useTranslation();
  const { data: experiences, isLoading } = useExperiences();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-4xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
          {t('about.title')}
        </p>
        
        <h1 className="editorial-large text-foreground mb-12 max-w-2xl text-balance">
          I pick the boring solution until boring stops working.
        </h1>

        <div className="prose prose-lg text-muted-foreground mb-20 max-w-2xl">
          <p className="leading-relaxed">
            Most decisions come down to trade-offs: speed vs. correctness, flexibility vs. simplicity, now vs. later. I optimize for deletion—code that's easy to throw away when requirements change.
          </p>
        </div>
      </div>

      <section className="max-w-4xl">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-display text-xl text-foreground">
            {t('about.experience')}
          </h2>
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            2023 → Present
          </p>
        </div>
        
        {isLoading ? (
          <p className="text-muted-foreground">{t('common.loading')}</p>
        ) : experiences ? (
          <ExperienceTimeline experiences={experiences} />
        ) : null}
      </section>
    </div>
  );
};

export default About;
