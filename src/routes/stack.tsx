import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import { api } from '@/services/api';
import Stack from '@/pages/Stack';

export const stackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stack',
  loader: async () => {
    const response = await api.getStack();
    return { stack: response.data };
  },
  component: Stack,
});
