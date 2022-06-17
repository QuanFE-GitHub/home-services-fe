import React from 'react';
import { Outlet } from 'react-router-dom';

import { FaChevronRight } from 'react-icons/fa';

import './Customers.scss';

const Customers = () => {
  return (
    <div id='customers' className='customers'>
      <div className='customerHeader'>
        <h3 className='customerTitle'>Customer</h3>
        <div className='customerBreadCrumbs'>
          <span className='customerBeadCrumbsAdmin'>Admin</span>
          <div className='customerBreadCrumbsItem'>
            <FaChevronRight className='customerBeadCrumbsIcon' />
            <span className='customerBeadCrumbsName'>Customers</span>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Customers;
