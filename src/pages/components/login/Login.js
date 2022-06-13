import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import loginBanner from '../../../assets/images/loginBanner.jpg';

import { Accounts } from '../../../data/AccountData';

import './Login.scss';
import { Navigate, useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Vui lòng nhập email')
    .matches(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/, 'Sai định dạng email'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .matches(
      /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/,
      'Mật khẩu bao gồm chữ in hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 ký tự.'
    ),
});

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Accounts.map((account, idx) => {
      if (account.email === data.email && account.password === data.password) {
        navigate('/services');
      } else {
        return alert('Tai khoan hoac mat khau khong dung.');
      }
      return console.log(data);
    });
  };

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
