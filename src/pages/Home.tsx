import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        <p className="text-muted-foreground mb-4 tracking-wide uppercase text-xs">
          Open to contracts — 2024
        </p>
        
        <h1 className="editorial-display text-foreground mb-8 text-balance">
          Software that ships.<br />
          <em className="text-muted-foreground">No frameworks for frameworks' sake.</em>
        </h1>
        
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-12">
          <Link 
            to="/projects" 
            className="editorial-link text-foreground text-lg"
          >
            Selected work →
          </Link>
          <Link 
            to="/about" 
            className="editorial-link text-muted-foreground text-lg"
          >
            About me
          </Link>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <p className="text-xs text-muted-foreground tracking-wide uppercase">
          Scroll
        </p>
      </div>
    </div>
  );
};

export default Home;
