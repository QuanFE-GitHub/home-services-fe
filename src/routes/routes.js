import Login from 'src/pages/auth/login/index';
import ForgotPassword from 'src/pages/auth/forgotPassword/index';
import NewPassword from 'src/pages/auth/newPassword/index';
import Services from '../pages/admin/services/Services';

import Requests from 'src/pages/admin/requests/Requests';
import RequestList from 'src/pages/admin/requestsList';

import Customers from 'src/pages/admin/customer/Customer';
import CustomersList from 'src/pages/admin/customersList';

import Employees from 'src/pages/admin/employees/Employees';
import EmployeesList from 'src/pages/admin/employeesList';

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
  customers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}/${routerPaths.LIST}`,
  listCustomers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}/${routerPaths.LIST}`,
  createCustomers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}/${routerPaths.CREATE}`,
  editCustomers: `${routerPaths.ADMIN}/${routerPaths.CUSTOMERS}`,

  // Employees
  employees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}/${routerPaths.LIST}`,
  listEmployees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}/${routerPaths.LIST}`,
  createEmployees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}/${routerPaths.CREATE}`,
  editEmployees: `${routerPaths.ADMIN}/${routerPaths.EMPLOYEES}`,
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
    children: [
      {
        path: `${routerPaths.LIST}`,
        component: CustomersList,
        index: true,
      },
    ],
  },
  {
    path: `${routerPaths.EMPLOYEES}`,
    component: Employees,
    children: [
      {
        path: `${routerPaths.LIST}`,
        component: EmployeesList,
        index: true,
      },
    ],
  },
];
