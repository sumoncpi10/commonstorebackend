import express from 'express';
import { BrandRoutes } from '../modules/brand/brand.route';
import { ComplainRoutes } from '../modules/complain/complain.route';
import { EmployeeRoutes } from '../modules/employee/employee.route';
import { ModelRoutes } from '../modules/model/model.route';
import { PbsRoutes } from '../modules/pbs/pbs.routes';
import { SubstationRoutes } from '../modules/substation/substation.route';
import { UserRoutes } from '../modules/user/user.route';
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
  {
    path: '/complain',
    route: ComplainRoutes,
  },
  {
    path: '/substation',
    route: SubstationRoutes,
  },
  {
    path: '/user',
    route: UserRoutes,
  },
  {
    path: '/employee',
    route: EmployeeRoutes,
  },
  {
    path: '/brand',
    route: BrandRoutes,
  },
  {
    path: '/model',
    route: ModelRoutes,
  },
  {
    path: '/zonal',
    route: ZonalRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
