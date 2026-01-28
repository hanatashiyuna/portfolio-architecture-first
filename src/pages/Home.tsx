import { Link } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import portraitImage from '@/assets/portrait.png';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-[85vh] px-6 md:px-12 lg:px-24 py-16 lg:py-24">
      <div className="grid grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Portrait - Left aligned, not centered */}
        <div className="col-span-12 lg:col-span-4 order-2 lg:order-1">
          <div 
            className="relative opacity-0 animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          >
            {/* Portrait */}
            <div className="aspect-[3/4] bg-muted overflow-hidden">
              <img
                src={portraitImage}
                alt="Portrait"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            {/* Caption */}
            <p className="text-xs text-muted-foreground mt-4 tracking-wide">
              Ho Chi Minh City, 2024
            </p>
          </div>
        </div>

        {/* Content - Right side */}
        <div className="col-span-12 lg:col-span-7 lg:col-start-5 order-1 lg:order-2 flex flex-col justify-center min-h-[60vh] lg:min-h-[70vh]">
          {/* Status line with availability indicator */}
          <div 
            className="flex items-center gap-4 mb-6 opacity-0 animate-slide-in"
          >
            <p className="text-muted-foreground tracking-normal uppercase text-xs font-medium">
              Open to contracts — 2024
            </p>
            <span className="hidden sm:flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-xs text-muted-foreground uppercase tracking-normal font-medium">
                Available
              </span>
            </span>
          </div>
          
          <h1 
            className="editorial-display text-foreground mb-8 text-balance opacity-0 animate-fade-up"
            style={{ animationDelay: '0.1s' }}
          >
            Software that ships.
          </h1>
          
          <p 
            className="text-muted-foreground text-lg max-w-md mb-12 leading-relaxed opacity-0 animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            No frameworks for frameworks' sake. I pick boring tools, write code that deletes well, and ship when it matters.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 sm:gap-12 opacity-0 animate-fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            <Link 
              to="/projects" 
              className="editorial-link text-foreground text-lg group"
            >
              Selected work 
              <span className="inline-block ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
            <Link 
              to="/about" 
              className="editorial-link text-muted-foreground text-lg"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
