import React from 'react';
import TableHeaderAction from 'src/components/tableHeaderActions';
import StatCard from '../../components/statCard';
// import CustomerTableHeader from '../components/customerTableHeader';

import './CustomerList.scss';

const CustomerList = () => {
  return (
    <div id='customerList' className='customerList'>
      <div className='lsStatistic'>
        {Array(4)
          .fill(0)
          .map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
      </div>
      <div className='clTable'>
        <TableHeaderAction />
        {/* <CustomerTableHeader /> */}
        <div className='clTableListItem'></div>
      </div>
    </div>
  );
};

export default CustomerList;
