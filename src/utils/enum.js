import { exactRouter } from '../routes/routes';

export const routerPath = {
  // Role
  ADMIN: `admin`,

  // Auth
  AUTH: `auth`,
  LOGIN: `login`,
};

export const menu = [
  {
    path: `/${exactRouter.services}`,
    title: 'services',
  },
  {
    path: `/${exactRouter.services}`,
    title: 'request',
  },
  {
    path: `/${exactRouter.services}`,
    title: 'customer',
  },
  {
    path: `/${exactRouter.services}`,
    title: 'employee',
  },
];
