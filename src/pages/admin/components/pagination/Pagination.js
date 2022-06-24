import React from 'react';
import { useState } from 'react';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import './Pagination.scss';

const paginationNum = [1, 2, 3, 4, 5];

const Pagination = () => {
  const [pageNum, setPageNum] = useState(false);

  return (
    <div id='pagination' className='pagination'>
      <div className='paginationContainer'>
        <div className='paginationPrev'>
          <FaChevronLeft className='paginationIcon' />
        </div>
        {paginationNum.map((item, idx) => {
          return (
            <span className={`paginationNum ${pageNum && 'paginationActive'}`} key={idx}>
              {item}
            </span>
          );
        })}
        <div className='paginationNext'>
          <FaChevronRight className='paginationIcon' />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
