import React from 'react';
import { NavLink } from 'react-router-dom';

import { menu } from '../../../../utils/enum';

import { BiLogOut } from 'react-icons/bi';

import './Sidebar.scss';

const handleLogOut = () => {
  return;
};

const Sidebar = () => {
  return (
    <div className='sbContainer'>
      <div className='sbLogo'>
        <h2 className='sbLogoName'>Home Services</h2>
        <p className='sbLogoDesc'>Best care</p>
      </div>
      <div className='sbMenu'>
        <ul className='sbMenuList'>
          {menu.map((item, index) => {
            return (
              <NavLink to={item.path} className='sbMenuItemLink' key={index}>
                <li className='sbMenuItem'>
                  {<item.icon className='sbMenuIcon' />}
                  <span className='sbMenuLinkItem'>{item.title}</span>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className='sbProfileContainer'>
        <div className='sbProfile'>
          <div className='sbProfileWrap'>
            <div className='sbProfileAvatar'>
              <div className='sbProfileStatus'></div>
              <img
                src='https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1956&q=80'
                alt='avatar'
                className='sbProfileImg'
              />
            </div>
            <div className='sbProfileContent'>
              <p className='sbProfileName'>quan pham</p>
              <p className='sbProfileRole'>admin</p>
            </div>
          </div>
          <div className='sbLogout' onClick={handleLogOut}>
            <BiLogOut className='sbLogoutIcon' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
