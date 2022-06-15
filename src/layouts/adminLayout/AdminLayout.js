import React from 'react';
import { Outlet } from 'react-router-dom';

import './AdminLayout.scss';

import Sidebar from './components/sidebar';

const AdminLayout = () => {
  return (
    <div className='adContainer'>
      <Sidebar />
      <div className='adMain'>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
