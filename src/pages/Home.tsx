import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-foreground mb-4">
          {t('home.title')}
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          {t('home.subtitle')}
        </p>
        <Button asChild>
          <Link to="/projects">{t('home.cta')}</Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
