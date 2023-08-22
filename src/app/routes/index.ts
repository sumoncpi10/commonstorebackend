import express from 'express';
import { PbsRoutes } from '../modules/pbs/pbs.routes';
import { ZonalRoutes } from '../modules/zonal/zonal.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/pbs',
    route: PbsRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
