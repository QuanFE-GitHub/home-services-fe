import React from 'react';

import './ServiceTable.scss';

const ServiceHeader = () => {
  return (
    <div id='serviceHeader'>
      <div>Service Name</div>
      <div>Price</div>
      <div>Status</div>
      <div>Action</div>
    </div>
  );
};

export default ServiceHeader;
