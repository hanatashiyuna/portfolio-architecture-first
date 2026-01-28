import { createRoute } from '@tanstack/react-router';
import { z } from 'zod';
import { rootRoute } from '../__root';
import { api } from '@/services/api';
import ProjectsPage from '@/pages/Projects';
import { RouteLoadingIndicator } from '@/components/layout/RouteLoadingIndicator';
import { RouteErrorBoundary } from '@/components/layout/RouteErrorBoundary';

// Search params schema for type-safe filtering
const projectsSearchSchema = z.object({
  filter: z.enum(['all', 'featured']).optional().default('all'),
  tech: z.string().optional(),
});

export type ProjectsSearch = z.infer<typeof projectsSearchSchema>;

export const projectsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/projects',
  validateSearch: projectsSearchSchema,
  loaderDeps: ({ search }) => ({ filter: search.filter, tech: search.tech }),
  loader: async ({ deps }) => {
    const response = await api.getProjects();
    let projects = response.data;
    
    // Apply filters
    if (deps.filter === 'featured') {
      projects = projects.filter(p => p.featured);
    }
    if (deps.tech) {
      projects = projects.filter(p => 
        p.technologies.some(t => t.toLowerCase().includes(deps.tech!.toLowerCase()))
      );
    }
    
    return { projects };
  },
  component: ProjectsPage,
  pendingComponent: RouteLoadingIndicator,
  errorComponent: ({ error }) => <RouteErrorBoundary error={error} />,
});
