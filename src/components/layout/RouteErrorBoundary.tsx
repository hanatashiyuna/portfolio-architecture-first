import { Link, useRouter } from '@tanstack/react-router';
import { useTranslation } from 'react-i18next';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface RouteErrorBoundaryProps {
  error?: Error;
}

export const RouteErrorBoundary = ({ error }: RouteErrorBoundaryProps) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleRetry = () => {
    router.invalidate();
  };

  return (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 mb-6">
          <AlertTriangle className="h-6 w-6 text-destructive" />
          <h1 className="font-display text-xl text-foreground">
            {t('common.error')}
          </h1>
        </div>
        
        <p className="text-muted-foreground mb-8">
          {error?.message || 'Something went wrong while loading this page.'}
        </p>

        <div className="flex gap-6">
          <button
            onClick={handleRetry}
            className="editorial-link text-foreground flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Try again
          </button>
          
          <Link to="/" className="editorial-link text-muted-foreground">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};
