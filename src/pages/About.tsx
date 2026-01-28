import { useTranslation } from 'react-i18next';
import { useExperiences } from '@/hooks/useExperiences';
import { ExperienceTimeline } from '@/components/timeline/ExperienceTimeline';

const About = () => {
  const { t } = useTranslation();
  const { data: experiences, isLoading } = useExperiences();

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-foreground mb-8">{t('about.title')}</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-foreground mb-6">
          {t('about.experience')}
        </h2>
        {isLoading ? (
          <p className="text-muted-foreground">{t('common.loading')}</p>
        ) : experiences ? (
          <ExperienceTimeline experiences={experiences} />
        ) : (
          <p className="text-muted-foreground">{t('common.error')}</p>
        )}
      </section>
    </div>
  );
};

export default About;
