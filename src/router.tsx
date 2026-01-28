import {
  createRouter,
  createRootRoute,
  createRoute,
  Outlet,
} from '@tanstack/react-router';
import { Header } from '@/components/layout/Header';

// Pages
import Home from '@/pages/Home';
import About from '@/pages/About';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Stack from '@/pages/Stack';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';

// Root Layout
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
    </div>
  ),
  notFoundComponent: NotFound,
});

// Routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: About,
});

const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  component: Projects,
});

const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$slug',
  component: ProjectDetail,
});

const stackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stack',
  component: Stack,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});

// Route Tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  projectDetailRoute,
  stackRoute,
  contactRoute,
]);

// Router - use type assertion to bypass strictNullChecks requirement in tsconfig.app.json
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const router = createRouter({ routeTree } as any);

// Type Registration
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
