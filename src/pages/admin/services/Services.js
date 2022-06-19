import React from 'react';

import { FaLayerGroup } from 'react-icons/fa';
import TableHeaderActions from 'src/components/tableHeaderActions';

import BeadCrumbs from '../components/beadCrumbs';
import Pagination from '../components/pagination';
import StatCard from '../components/statCard';
import ServiceTableHeader from './components/serviceTableHeader';
import ServiceTableItem from './components/serviceTableItem';

import './Services.scss';

const beadCrumbs = ['services'];

// StatCard data
const statData = [
  {
    value: 123,
    title: 'Tổng số dịch vụ',
    icon: FaLayerGroup,
  },
  {
    value: 45,
    title: 'Dịch vụ đã kích hoạt',
    icon: FaLayerGroup,
  },
  {
    value: 78,
    title: 'Dịch vụ chưa kích hoạt',
    icon: FaLayerGroup,
  },
];

const filterOptions = {
  filterValue: 'Chọn giá',
  options: ['tăng dần', 'giảm dần'],
};

const Services = () => {
  return (
    <div id='services' className='services'>
      <BeadCrumbs title='Services' beadCrumbs={beadCrumbs} />

      <div id='customerList' className='customerList'>
        <div className='lsStatistic'>
          {statData.map((item, idx) => {
            return <StatCard item={item} key={idx} />;
          })}
        </div>

        <div className='clTable'>
          <TableHeaderActions add='add new service' filterOptions={filterOptions} />

          <ServiceTableHeader />

          <div className='clTableListItem'>
            {Array(10)
              .fill(0)
              .map((item, index) => {
                return <ServiceTableItem item={item} key={index} />;
              })}
          </div>

          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Services;
