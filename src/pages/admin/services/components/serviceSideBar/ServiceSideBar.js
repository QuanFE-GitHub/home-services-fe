import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

import { FaTimes } from 'react-icons/fa';

import './ServiceSideBar.scss';

const schema = yup.object().shape({
  service: yup.string().required('Vui lòng nhập email'),
  price: yup.string().required('Vui lòng nhập password'),
});

const ServiceSideBar = ({ sidebar, setSideBar }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = () => {
    return;
  };

  return (
    <div className={`${'serviceSideBar'} ${sidebar ? 'showSideBar' : ''}`}>
      <div className='ssbHeader'>
        <div className='ssbTitle'>new service</div>
        <div className='ssbClose' onClick={() => setSideBar(false)}>
          <FaTimes className='ssbCloseIcon' />
        </div>
      </div>
      <form className='ssbContent' onSubmit={handleSubmit(onSubmit)}>
        {/* Service */}
        <div className='loginFormGroup'>
          <label htmlFor='service' className='loginLabel'>
            Service
          </label>
          <input className={`loginInputTxt`} type='text' id='service' name='service' {...register('service')} />
          {errors.service && <p className='loginValidate'>{errors.service?.message}</p>}
        </div>

        {/* price */}
        <div className='loginFormGroup'>
          <label htmlFor='price' className='loginLabel'>
            Price
          </label>
          <input className={`loginInputTxt`} type='text' id='price' name='price' {...register('price')} />
          {errors.price && <p className='loginValidate'>{errors.price?.message}</p>}
        </div>
        <div className='loginBtn'>
          <input type='submit' value='Add' />
        </div>
      </form>
    </div>
  );
};

export default ServiceSideBar;
