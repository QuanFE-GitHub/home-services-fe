import Login from '../pages/components/login';
import ForgotPassword from '../pages/components/forgotPassword';

export const routerPaths = {
  ADMIN: 'admin',

  AUTH: 'auth',
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  CHECK_MAIL: 'check-mail',
  CREATE_NEW_PASSWORD: 'create-new-password',
  REGISTER: 'register',

  SERVICES: 'services',

  LIST: 'list',
  CREATE: 'create',
  EDIT: 'edit',
};

export const exactRouter = {
  // Auth
  signIn: `${routerPaths.AUTH}/${routerPaths.LOGIN}`,
  forgotPassword: `${routerPaths.AUTH}/${routerPaths.FORGOT_PASSWORD}`,

  // Services
  listService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.LIST}`,
  createService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.CREATE}`,
  editService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}`,
};

export const authRoutes = [
  {
    index: true,
    component: Login,
  },
  {
    path: `${routerPaths.FORGOT_PASSWORD}`,
    component: ForgotPassword,
  },
];
