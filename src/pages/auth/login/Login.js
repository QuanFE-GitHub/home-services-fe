import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';

import { regexEmail, regexPassword } from 'src/utils/constants';
import { exactRouter } from 'src/routes/routes';
import { Accounts } from 'src//data/AccountData';

import './Login.scss';

const schema = yup.object().shape({
  email: yup.string().required('Vui lòng nhập email').matches(regexEmail, 'Sai định dạng email'),
  password: yup
    .string()
    .required('Vui lòng nhập password')
    .matches(regexPassword, 'Mật khẩu bao gồm chữ in hoa, chữ thường, số, ký tự đặc biệt và ít nhất 8 ký tự.'),
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
    <div id='loginPage'>
      <h1 className='loginTitle'>
        Welcome <br /> to Home Services
      </h1>
      <h3 className='loginRole'>Admin</h3>

      <form className='loginForm' onSubmit={handleSubmit(onSubmit)}>
        <div className='loginFormGroup'>
          <label htmlFor='email' className='loginLabel'>
            Email
          </label>
          <input
            className={`loginInputTxt ${errors.email && 'loginInputTxtError'}`}
            type='text'
            id='email'
            name='email'
            {...register('email')}
          />
          {errors.email && <p className='loginValidate'>{errors.email?.message}</p>}
        </div>
        <div className='loginFormGroup'>
          <label htmlFor='password' className='loginLabel'>
            Password
          </label>
          <input
            className={`loginInputTxt ${errors.password && 'loginInputTxtError'}`}
            type='password'
            id='password'
            name='password'
            {...register('password')}
          />
          {errors.password && <p className='loginValidate'>{errors.password?.message}</p>}
        </div>

        <Link className='loginForgot' to={`/${exactRouter.forgotPassword}`}>
          Forgot Password
        </Link>
        <div className='loginBtn'>
          <input type='submit' value='Sign In' />
        </div>
      </form>
    </div>
  );
};

export default Login;