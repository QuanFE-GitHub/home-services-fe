import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div>
      <nav>
        <Link to={`/services/list`}>List</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Services;
