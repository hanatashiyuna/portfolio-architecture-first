import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16 min-h-[60vh] flex flex-col justify-center">
      <div className="max-w-2xl">
        <p className="text-xs text-muted-foreground uppercase tracking-wide mb-4">
          404 Error
        </p>
        
        <h1 className="editorial-large text-foreground mb-8 text-balance">
          Page not found
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed mb-12">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <a 
          href="/"
          onClick={(e) => {
            e.preventDefault();
            window.history.pushState({}, '', '/');
            window.dispatchEvent(new PopStateEvent('popstate'));
          }}
          className="editorial-link text-foreground text-lg"
        >
          ← Back to home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
