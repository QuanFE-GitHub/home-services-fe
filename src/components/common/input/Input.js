import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import './Input.scss';

const Input = (props) => {
  const { label, focus } = props;
  const { register } = useForm();
  return (
    <div className='inputField'>
      <label htmlFor={focus} className='inputLabel'>
        {label}
      </label>
      <input type='text' name={label} id={focus} {...register({ label })} />
    </div>
  );
};

export default Input;
