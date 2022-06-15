import Login from 'src/pages/auth/login/index';
import ForgotPassword from 'src/pages/auth/forgotPassword/index';
import NewPassword from 'src//pages/auth/newPassword/index';

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
  auth: `${routerPaths.AUTH}`,
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
    index: false,
    path: `${routerPaths.FORGOT_PASSWORD}`,
    component: ForgotPassword,
  },
  {
    index: false,
    path: `${routerPaths.CREATE_NEW_PASSWORD}`,
    component: NewPassword,
  },
];
