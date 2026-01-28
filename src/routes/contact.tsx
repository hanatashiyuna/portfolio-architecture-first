import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './__root';
import Contact from '@/pages/Contact';

export const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: Contact,
});
