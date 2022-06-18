import React from 'react';
import './CustomerTableHeader.scss';

const customerTableHeader = ['name', 'email', 'phone', 'age', 'actions'];

const CustomerTableHeader = () => {
  return (
    <div className='customerTableHeader'>
      {customerTableHeader.map((item, idx) => {
        return (
          <span className='cthLabel' key={idx}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default CustomerTableHeader;
