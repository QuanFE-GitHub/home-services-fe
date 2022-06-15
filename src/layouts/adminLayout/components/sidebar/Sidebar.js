import React from 'react';
import { NavLink } from 'react-router-dom';

import { menu } from '../../../../utils/enum';

import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sbContainer'>
      <div className='sbLogo'>
        <h2 className='sbLogoName'>Home Services</h2>
      </div>
      <div className='sbMenu'>
        <ul className='sbMenuList'>
          {menu.map((item, index) => {
            return (
              <li className='sbMenuItem' key={index}>
                <NavLink to={item.path} className='sbMenuLink'>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className='sbProfileContainer'>
        <div className='sbProfile'>
          <img src='' alt='avatar' className='sbProfileImg' />
          <div className='sbProfileContent'>
            <p className='sbProfileName'>Quan</p>
            <p className='sbProfileRole'>Admin</p>
          </div>
          <div className='sbLogout'>
            <img src='' alt='logout' className='sbLogoutImg' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
