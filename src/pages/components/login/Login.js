import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { regexEmail, regexPassword } from '../../../utils/constants';

import { Accounts } from '../../../data/AccountData';

import './Login.scss';
import { useNavigate } from 'react-router-dom';

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
      <div className='loginForgot'>
        <span>Forgot Password</span>
      </div>
      <div className='loginBtn'>
        <input type='submit' value='Sign In' />
      </div>
    </form>
  );
};

export default Login;
