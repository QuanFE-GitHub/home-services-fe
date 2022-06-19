import Login from 'src/pages/auth/login/index';
import ForgotPassword from 'src/pages/auth/forgotPassword/index';
import NewPassword from 'src/pages/auth/newPassword/index';
import Services from '../pages/admin/services';

import Requests from 'src/pages/admin/requests';
import RequestList from 'src/pages/admin/requests/requestList';

import Customers from 'src/pages/admin/customers';

import Employees from 'src/pages/admin/employees';
// import EmployeeList from 'src/pages/admin/employees/employeeList';

import ServiceList from 'src/pages/admin/services/serviceList';
import ServiceDetails from 'src/pages/admin/services/serviceDetails';

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
  services: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.LIST}`,
  listService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.LIST}`,
  createService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}/${routerPaths.CREATE}`,
  editService: `${routerPaths.ADMIN}/${routerPaths.SERVICES}`,

  // Request
  request: `${routerPaths.ADMIN}/${routerPaths.REQUESTS}/${routerPaths.LIST}`,
  listRequests: `${routerPaths.ADMIN}/${routerPaths.REQUESTS}/${routerPaths.LIST}`,

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
    children: [
      {
        path: `${routerPaths.LIST}`,
        component: ServiceList,
        index: true,
      },
      {
        path: `:${routerPaths.ID}`,
        component: ServiceDetails,
      },
    ],
  },
  {
    path: `${routerPaths.REQUESTS}`,
    component: Requests,
    children: [
      {
        path: `${routerPaths.LIST}`,
        component: RequestList,
        index: true,
      },
    ],
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
    // children: [
    //   {
    //     path: `${routerPaths.LIST}`,
    //     component: EmployeeList,
    //     index: true,
    //   },
    // ],
  },
];
