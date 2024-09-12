import React, { useState } from 'react';

function Registration() {
    return (
        <div className='regist-div'>
        <h2>Registration</h2>
        <form className='regist-form'>
          <div>
            <label htmlFor='name'><b>Name:</b></label>
            <input id='name' type='text' />
          </div>
          <div>
            <label htmlFor='email'><b>Email:</b></label>
            <input id='email' type='text' />
          </div>
          <div>
            <label htmlFor='password'><b>Password:</b></label>
            <input id='password' type='text' />
          </div>
          <button className='button'>Submit</button>
        </form>
      </div>

    )
}

export default Registration;
