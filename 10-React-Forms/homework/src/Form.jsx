import React from 'react';
import { useState } from 'react';

export function validate(input) {
  let errors = {};
  if (input.username === '') {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
    return errors;
  }
  if (input.password === '') {
    errors.password = 'Password is required';
  } else if (!/(?=.*[0-9])/.test(input.password)) {
    errors.password = 'Password is invalid';
    return errors;
  }
  return errors;
}

export default function Form() {
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    username: '',
    password: ''
  })

  const handleInputChange = function (e) {
    setInput(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))

    const error = validate({
      ...input,
      [e.target.name]: e.target.value
    });

    setError(error);
  }

  return (
    <div>
      <form className='container'>
        <div>
          <label>Username:</label>
          <input
            className={error.username && 'danger'}
            type={"text"}
            name={'username'}
            onChange={handleInputChange}
            value={input.username}
          />
          {error.username && (
            <p className="danger">{error.username}</p>
          )}
        </div>
        <div>
          <label>Password:</label>
          <input
            className={error.password && 'danger'}
            type={"password"}
            name={'password'}
            onChange={handleInputChange}
            value={input.password}
          />
          {error.password && (
            <p className="danger">{error.password}</p>
          )}
        </div>
        <input 
        type={"submit"} 
        value={"Submit"} 
        className={'btn'}/>
      </form>
    </div>
  )
}
