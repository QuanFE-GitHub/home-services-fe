import React from 'react';
import { Outlet } from 'react-router-dom';

import loginBanner from '../../assets/images/loginBanner.jpg';

import './AuthLayout.scss';

const AuthLayout = () => {
  return (
    <section id='login' className='loginContainer'>
      <div className='loginBanner'>
        <img src={loginBanner} alt='loginBanner' />
      </div>
      <div className='loginBox'>
        <div className={`loginContent`}>
          <h1 className='loginTitle'>
            Welcome <br /> to Home Services
          </h1>
          <h3 className='loginRole'>Admin</h3>
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
