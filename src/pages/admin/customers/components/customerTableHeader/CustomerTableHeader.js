import React from 'react';
import { customerTableHeader } from 'src/utils/enum';
import './CustomerTableHeader.scss';

const CustomerTableHeader = () => {
  return (
    <div className='customerTableHeader'>
      {customerTableHeader.map((item, idx) => {
        return (
          <span className='cthTitle' key={idx}>
            {item}
          </span>
        );
      })}
    </div>
  );
};

export default CustomerTableHeader;
