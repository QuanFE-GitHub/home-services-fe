import React, { useState } from 'react';

import { FaTimes, FaChevronDown } from 'react-icons/fa';

import './Filter.scss';

const Filter = ({ filterOptions }) => {
  const [value, setValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const filterClick = () => {
    setIsActive(!isActive);
  };

  const handleSelected = (e) => {
    setValue(e.target.innerText);
  };

  const handleClearSelected = () => {
    setValue('');
  };

  return (
    <div className='filter'>
      <div className='filterSelect' onClick={filterClick}>
        <input type='text' value={value} className='filterSelected' placeholder={`${filterOptions.filterValue}...`} />
        <div className='filterIcon'>
          {value && (
            <div className='filterClose' onClick={handleClearSelected}>
              <FaTimes />
            </div>
          )}
          <div className='filterDown'>
            <FaChevronDown className='filterIconDown' />
          </div>
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
