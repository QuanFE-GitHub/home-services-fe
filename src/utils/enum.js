import { exactRouter } from '../routes/routes';

import { BiServer, BiGitPullRequest, BiGroup } from 'react-icons/bi';

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
    icon: BiServer,
  },
  {
    path: `/${exactRouter.request}`,
    title: 'requests',
    icon: BiGitPullRequest,
  },
  {
    path: `/${exactRouter.customers}`,
    title: 'customers',
    icon: BiGroup,
  },
  {
    path: `/${exactRouter.employees}`,
    title: 'employees',
    icon: BiGroup,
  },
];

export const customerTableHeader = ['customer', 'email', 'phone', 'age', 'action'];
