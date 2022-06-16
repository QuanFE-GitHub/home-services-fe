import React from 'react';

import icon from 'src/assets/icons/ic_service.svg';
import './StatCard.scss';

const StatCard = () => {
  return (
    <div id='statCard'>
      <div className='scStatValue'>
        <div className='scValue'>9,444</div>
        <div className='scLabel'>Tổng số dịch vụ</div>
      </div>

      <div className='scIconWrap'>
        <img src={icon} alt='scIcon' className='scIcon' />
      </div>
    </div>
  );
};

export default StatCard;
