import { createRoute, notFound } from '@tanstack/react-router';
import { rootRoute } from '../__root';
import { api } from '@/services/api';
import ProjectDetail from '@/pages/ProjectDetail';
import { RouteLoadingIndicator } from '@/components/layout/RouteLoadingIndicator';
import { RouteErrorBoundary } from '@/components/layout/RouteErrorBoundary';

export const projectDetailRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects/$slug',
  loader: async ({ params }) => {
    const response = await api.getProject(params.slug);
    if (!response.data) {
      throw notFound();
    }
    return { project: response.data };
  },
  component: ProjectDetail,
  pendingComponent: RouteLoadingIndicator,
  errorComponent: ({ error }) => <RouteErrorBoundary error={error} />,
  notFoundComponent: () => (
    <div className="px-6 md:px-12 lg:px-24 py-16">
      <p className="text-muted-foreground">Project not found</p>
    </div>
  ),
});
