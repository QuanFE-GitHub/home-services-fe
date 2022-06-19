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
    title: 'dịch vụ',
    icon: BiServer,
  },
  {
    path: `/${exactRouter.request}`,
    title: 'yêu cầu dịch vụ',
    icon: BiGitPullRequest,
  },
  {
    path: `/${exactRouter.customers}`,
    title: 'khách hàng',
    icon: BiGroup,
  },
  {
    path: `/${exactRouter.employees}`,
    title: 'nhân viên',
    icon: BiGroup,
  },
];

export const customerTableHeader = ['customer', 'email', 'phone', 'age', 'action'];
