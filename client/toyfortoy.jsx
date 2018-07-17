import React from 'react';
import ReactDOM from 'react-dom';
import {register,login} from './util/session_api_utils';

document.addEventListener('DOMContentLoaded', () => {

  window.register = register;
  window.login = login;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to toyfortoy</h1>, root);
});
