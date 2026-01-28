import { createRootRoute, Outlet } from '@tanstack/react-router';
import { Header } from '@/components/layout/Header';
import NotFound from '@/pages/NotFound';

export const rootRoute = createRootRoute({
  component: RootLayout,
  notFoundComponent: NotFound,
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
