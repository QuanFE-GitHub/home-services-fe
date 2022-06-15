import Login from '../pages/components/login';
import ForgotPassword from '../pages/components/forgotPassword';
import Services from '../pages/admin/services/Services';
import ListService from '../pages/admin/services/components/ListService';
import ServicesDetail from '../pages/admin/services/components/ServicesDetail';

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
  ID: 'id',
};

export const exactRouter = {
  // Auth
  signIn: `${routerPaths.AUTH}/${routerPaths.LOGIN}`,
  forgotPassword: `${routerPaths.AUTH}/${routerPaths.FORGOT_PASSWORD}`,

  // Services
  services: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.LIST}`,
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

export const adminRoutes = [
  {
    path: `${routerPaths.SERVICES}`,
    component: Services,
    children: [
      {
        path: `${routerPaths.LIST}`,
        component: ListService,
        index: true,
      },
      {
        path: `:${routerPaths.ID}`,
        component: ServicesDetail,
      },
    ],
  },
];
