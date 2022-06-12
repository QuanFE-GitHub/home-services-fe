import Login from '../pages/admin/login';
import Register from '../pages/admin/register';
import { routerPath } from '../utils/enum';

export const authRoutes = [
  {
    index: true,
    component: Login,
  },
  {
    path: routerPath.REGISTER,
    component: Register,
  },
];
