import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'src/pages/user/components/footer';
import Header from 'src/pages/user/components/header';
import './CustomerLayout.scss';

const CustomerLayout = () => {
  return (
    <div className='customerLayout'>
      <Header />
      <div className='customerMain'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default CustomerLayout;
