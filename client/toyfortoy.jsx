import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import cookie from 'react-cookies';

// import {register,login} from './util/session_api_utils';

document.addEventListener('DOMContentLoaded', () => {

  // window.register = register;
  // window.login = login;


  let store;
  let token = cookie.load('token');
    console.log("token",token);
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    let currentUser = JSON.parse(window.atob(userInfo));

    const preloadedState = {
      auth:  { authenticated: true },
      user: { profile: { token: token, user: currentUser } }
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  store = configureStore();

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
