import React from 'react';

import Button from 'src/components/button';
import Search from 'src/components/search';
import StatCard from 'src/pages/admin/components/statCard';
import ServiceHeader from '../table/ServiceHeader';

import './ListService.scss';

const ListService = () => {
  return (
    <div id='listServices'>
      <div className='lsStatistic'>
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
      <div className='lsTableReorganize'>
        <div className='lsSearchWrap'>
          <Search />
        </div>

        <Button title='Add new service' />
      </div>
      <div className='lsTable'>
        <ServiceHeader />
      </div>
      <div className='lsPagination'></div>
    </div>
  );
};

export default ListService;
