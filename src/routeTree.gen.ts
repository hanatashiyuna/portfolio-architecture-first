import { rootRoute } from './routes/__root';
import { indexRoute } from './routes/index';
import { aboutRoute } from './routes/about';
import { projectsRoute } from './routes/projects/index';
import { projectDetailRoute } from './routes/projects/$slug';
import { stackRoute } from './routes/stack';
import { contactRoute } from './routes/contact';

// Create route tree with proper parent-child relationships
const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  projectsRoute,
  projectDetailRoute,
  stackRoute,
  contactRoute,
]);

export { routeTree, rootRoute };
