import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListService.scss';
import { ServicesData } from '../../../../data/ServicesData';

const ListService = () => {
  const navigate = useNavigate();
  return (
    <div>
      {ServicesData.map((service, idx) => {
        return (
          <div
            key={service.id}
            className='serviceDisplay'
            onClick={() => {
              navigate(`/admin/services/${service.id}`);
            }}
          >
            <h1>{service.name}</h1> <p>{service.description}</p>{' '}
          </div>
        );
      })}
    </div>
  );
};

export default ListService;
