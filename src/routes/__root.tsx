import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '@/components/layout/Header';
import { RouteLoadingIndicator } from '@/components/layout/RouteLoadingIndicator';
import { RouteErrorBoundary } from '@/components/layout/RouteErrorBoundary';
import NotFound from '@/pages/NotFound';

export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
  pendingComponent: RouteLoadingIndicator,
  errorComponent: ({ error }) => <RouteErrorBoundary error={error} />,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  );
}
