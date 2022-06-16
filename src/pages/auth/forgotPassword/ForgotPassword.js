import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { exactRouter } from 'src/routes/routes';
import './ForgotPassword.scss';

const ForgotPassword = () => {
  const [email, setEmail] = useState(false);

  return (
    <div id='forgotPassword'>
      <div className='fpHeader'>
        <h1 className='fpTitle'>{email ? 'Check your email' : 'Forgot password'}</h1>
        <p className='fpDesc'>
          {email
            ? 'Please check your inbox and click in the receive link to reset a password.'
            : 'Enter your registered email below to receive password reset instruction.'}
        </p>
      </div>
      <div className='fpBody'>
        {email ? (
          <>
            <button type='button' className='fpBtn'>
              Open email
            </button>
            <div className='fpResendText'>
              <span>Did’t receive the link? </span>
              <span className='fpResend'>Resend</span>
            </div>
          </>
        ) : (
          <>
            <form className='fpForm'>
              <div className='fpFormGroup'>
                <label htmlFor='email' className='fpLabel'>
                  Email
                </label>
                <input type='email' id='email' name='email' className='fpInputField' />
                <p className='fpValidateText'>Vui lòng nhập email</p>
              </div>
              <button type='button' className='fpBtn' onClick={() => setEmail(true)}>
                Send forgot password
              </button>
            </form>

            <Link to={`/${exactRouter.auth}`} className='fpLink'>
              Back to Log In
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
