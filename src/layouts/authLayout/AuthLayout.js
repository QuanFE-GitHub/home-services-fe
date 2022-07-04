import React from 'react';
import { Outlet } from 'react-router-dom';

import loginBanner from '../../assets/images/loginBanner.jpg';
// import loginBanner from '../../assets/images/background-login-1.png';

import './AuthLayout.scss';

const AuthLayout = () => {
  console.log(`[AuthLayout] render`);
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
