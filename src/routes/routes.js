import Login from 'src/pages/auth/login/index';
import ForgotPassword from 'src/pages/auth/forgotPassword/index';
import NewPassword from 'src/pages/auth/newPassword/index';
import Services from '../pages/admin/services';

import Requests from 'src/pages/admin/requests';

import Customers from 'src/pages/admin/customers';

import Employees from 'src/pages/admin/employees';

export const routerPaths = {
  ADMIN: 'admin',

  AUTH: 'auth',
  LOGIN: 'login',
  FORGOT_PASSWORD: 'forgot-password',
  CHECK_MAIL: 'check-mail',
  CREATE_NEW_PASSWORD: 'create-new-password',
  REGISTER: 'register',

  SERVICES: 'services',
  REQUESTS: 'requests',
  CUSTOMERS: 'customers',
  EMPLOYEES: 'employees',

  LIST: 'list',
  CREATE: 'create',
  EDIT: 'edit',
  ID: 'id',
};

export const exactRouter = {
  // Auth
  auth: `${routerPaths.AUTH}`,
  signIn: `${routerPaths.AUTH}/${routerPaths.LOGIN}`,
  forgotPassword: `${routerPaths.AUTH}/${routerPaths.FORGOT_PASSWORD}`,

  // Services
  services: `${routerPaths.ADMIN}/${routerPaths.SERVICES}`,
  createService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.CREATE}`,
  editService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}`,

  // Request
  request: `${routerPaths.ADMIN}/${routerPaths.REQUESTS}`,

  // Customers
  customers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}`,
  createCustomers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}/${routerPaths.CREATE}`,
  editCustomers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}/:${routerPaths.ID}`,

  // Employees
  employees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}`,
  createEmployees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}/${routerPaths.CREATE}`,
  editEmployees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}/:${routerPaths.ID}`,
};

export const authRoutes = [
  {
    index: true,
    path: `${routerPaths.LOGIN}`,
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

export const adminRoutes = [
  {
    path: `${routerPaths.SERVICES}`,
    component: Services,
    index: true,
  },
  {
    path: `${routerPaths.REQUESTS}`,
    component: Requests,
  },
  {
    path: `${routerPaths.CUSTOMERS}`,
    component: Customers,
    // children: [
    //   {
    //     component: CustomerList,
    //     index: true,
    //   },
    // ],
  },
  {
    path: `${routerPaths.EMPLOYEES}`,
    component: Employees,
  },
];
