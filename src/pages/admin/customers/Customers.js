import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

import './Customers.scss';
import StatCard from '../components/statCard';
import TableHeaderActions from 'src/components/tableHeaderActions';
import CustomerTableItem from './components/customerTableItem';
import CustomerTableHeader from './components/customerTableHeader';

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
      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {Array(4)
            .fill(0)
            .map((item, idx) => {
              return <StatCard item={item} key={idx} />;
            })}
        </div>
        <div className='clTable'>
          <TableHeaderActions />
          <CustomerTableHeader />
          {Array(10)
            .fill(0)
            .map((item, index) => {
              return <CustomerTableItem item={item} key={index} />;
            })}
          <div className='clTableListItem'></div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
