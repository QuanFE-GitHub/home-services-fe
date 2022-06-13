import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './Login.scss';

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email').max(10, 'Email tối đa 10 ký tự'),
  password: yup.string().required('Vui lòng nhập password'),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
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
          <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
            <div className='loginFormGroup'>
              <label htmlFor='email' className='loginLabel'>
                Email
              </label>
              <div className='loginInput'>
                <input type='text' id='email' name='email' {...register('email')} />
              </div>
              {errors.email && <p className='loginValidate'>{errors.email?.message}</p>}
            </div>
            <div className='loginFormGroup'>
              <label htmlFor='password' className='loginLabel'>
                Password
              </label>
              <div className='loginInput'>
                <input type='password' id='password' name='password' {...register('password')} />
              </div>
              {errors.password && <p className='loginValidate'>{errors.password?.message}</p>}
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
