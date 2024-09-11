import React, { useState } from 'react';

function Registration() {
    return (
        <div>
        <h2>Registration</h2>
        <form>
          <div>
            <label htmlFor='name'>Name:</label>
            <input id='name' type='text' />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input id='email' type='text' />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input id='password' type='text' />
          </div>
          <button>Submit</button>
        </form>
      </div>

    )
}

export default Registration;
