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
          Developer focused on building products that balance craft with pragmatism.
        </h1>

        <div className="prose prose-lg text-muted-foreground mb-20 max-w-2xl">
          <p className="leading-relaxed">
            I believe good software is invisible—it gets out of the way and lets people do what they came to do. I write code that's meant to be read, maintained, and eventually replaced.
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
