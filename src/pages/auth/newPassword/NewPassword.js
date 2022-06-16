import React from 'react';

import './NewPassword.scss';

const NewPassword = () => {
  return (
    <div id='newPassword'>
      <div className='npHeader'>
        <h1 className='npTitle'>Create new password</h1>
        <p className='npDesc'>Your new password must be different from previous used passwords.</p>
      </div>

      <div className='npBody'>
        <form className='npForm'>
          <div className='npFormGroup'>
            <label htmlFor='newPassword' className='npLabel'>
              Password*
            </label>
            <input type='password' id='newPassword' name='newPassword' className='npInputField' />
            <p className='npValidateText'>Vui lòng nhập password</p>
          </div>

          <div className='npFormGroup'>
            <label htmlFor='newPassword' className='npLabel'>
              Confirm password*
            </label>
            <input type='password' id='newPassword' name='newPassword' className='npInputField' />
            <p className='npValidateText'>Vui lòng nhập password</p>
          </div>

          <button type='button' className='npBtn'>
            Reset and login
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
