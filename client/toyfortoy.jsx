import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import cookie from 'react-cookies';

// import {register,login} from './util/session_api_utils';
// import * as toyAPIUtil from './util/toy_util';


document.addEventListener('DOMContentLoaded', () => {

  // window.register = register;
  // window.login = login;
  // window.fetchAllToys = toyAPIUtil.fetchAllToys;
  // window.fetchOneToy = toyAPIUtil.fetchOneToy;
  // window.updateToy = toyAPIUtil.updateToy;
  // window.createToy = toyAPIUtil.createToy;
  // window.deleteToy = toyAPIUtil.deleteToy;



  let store;
  let token = cookie.load('token');
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

  window.state = store.getState();


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
