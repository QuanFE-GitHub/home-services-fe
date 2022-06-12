import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/services`);
    return;
  };
  return (
    <section id='login' className='loginContainer'>
      <div className='loginBanner'>
        <img
          src='https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
          alt='loginBanner'
        />
      </div>
      <div className='loginBox'>
        <div className={`loginContent`}>
          <h1 className='loginTitle'>
            Welcome <br /> to Home Services
          </h1>
          <h3 className='loginRole'>Admin</h3>
          <form action='POST' className='loginForm' onSubmit={onSubmit}>
            <div className='loginFormGroup'>
              <label htmlFor='email' className='loginLabel'>
                Email
              </label>
              <div className='loginInput'>
                <input type='email' id='email' name='email' required />
              </div>
              <span className={`loginValidate`}>{`Email invalid`}</span>
            </div>
            <div className='loginFormGroup'>
              <label htmlFor='password' className='loginLabel'>
                Password
              </label>
              <div className='loginInput'>
                <input type='password' id='password' name='password' required />
              </div>
            </div>
            <div className='loginForgot'>
              <span>Forgot Password</span>
            </div>
            <div className='loginBtn'>
              <input type='submit' value='Sign In' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
