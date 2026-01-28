import { createRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';

// Create router with type-safe route tree
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const router = createRouter({ 
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
} as any);

// Type Registration for type-safe navigation
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
