import React from 'react';
import { useParams } from 'react-router-dom';
import { ServicesData } from '../../../../data/ServicesData';
import './ServicesDetail.scss';

const ServicesDetail = () => {
  const { id } = useParams();
  return (
    <div className='listOfProducts'>
      <div className='productDisplay'>
        <h1>{ServicesData[id - 1].name}</h1>
        <p>{ServicesData[id - 1].description}</p>
      </div>
    </div>
  );
};

export default ServicesDetail;
