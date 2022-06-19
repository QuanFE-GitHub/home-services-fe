import React, { useState } from 'react';

import { FaTimes, FaChevronDown } from 'react-icons/fa';

import './Filter.scss';

const Filter = ({ filterOptions }) => {
  const [selectValue, setSelectValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const filterClick = () => {
    setIsActive(!isActive);
  };

  const handleSelected = (e) => {
    setSelectValue(e.target.innerText);
    setIsActive(!isActive);
  };

  const handleClearSelected = () => {
    setSelectValue('');
  };

  return (
    <div className='filter'>
      <div className='filterSelect'>
        <input
          type='text'
          value={selectValue}
          className='filterSelected'
          placeholder={`${filterOptions.filterValue}...`}
          onClick={filterClick}
          onChange={(e) => setSelectValue(e.target.value)}
        />
        <div className='filterIcon'>
          {selectValue && (
            <div className='filterClose' onClick={handleClearSelected}>
              <FaTimes />
            </div>
          )}
          {!selectValue && (
            <div className='filterDown' onClick={filterClick}>
              <FaChevronDown className='filterIconDown' />
            </div>
          )}
          {!selectValue && (
            <div className='filterDown'>
              <FaChevronDown className='filterIconDown' />
            </div>
          )}
        </div>
      </div>
      {isActive && (
        <div className='filterOptions'>
          <ul className='filterList'>
            {filterOptions.options.map((option, idx) => {
              return (
                <li className='filterItem' key={idx} onClick={handleSelected}>
                  {option}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
