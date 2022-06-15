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
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
