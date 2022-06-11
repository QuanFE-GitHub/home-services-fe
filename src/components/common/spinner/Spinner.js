import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className={`spinner`}>
      <div className='overlay'></div>
      <div className={`dots`}></div>
    </div>
  );
};

export default Spinner;
