import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
// import DemoLogin from "./DemoLogin";
import './LoginForm.css';
import { useHistory } from 'react-router-dom'

function LoginForm() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };


  const demoLogin = () => {
    const credential = 'Demo-lition'
    const password = 'password'
    history.push('/')
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors)
      })
  }

  return (
    <div className='whole__loginForm' >
      <form className='login__Form' onSubmit={handleSubmit}>
        <ul className='errors__list'>
          {errors.map((error, idx) => (
            <li key={idx}>{error}</li>
          ))}
        </ul>
        <div>
          <label className='cred__label'>
            Username or Email
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button className='login__button' type="submit">Log In</button>
        </div>
        <div>
          <button type='button' onClick={demoLogin}>Demo User</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
