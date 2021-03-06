import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import cookie from 'react-cookies';

// import {register,login} from './util/session_api_utils';
// import * as toyAPIUtil from './util/toy_util';
// import * as leaseAPIUtil from './util/lease_util';
// import {requestAllToys,requestOneToy,createToy,updateToy,removeToy}
// from './actions/toy_actions';
// import {requestAllLease}
// from './actions/lease_actions';


document.addEventListener('DOMContentLoaded', () => {

  // window.fetchToysByGPS = toyAPIUtil.fetchToysByGPS;
  // window.register = register;
  // window.login = login;
  // window.fetchAllToys = toyAPIUtil.fetchAllToys;
  // window.fetchAllLease = leaseAPIUtil.fetchAllLease;
  // window.fetchOneToy = toyAPIUtil.fetchOneToy;
  // window.updateToy = toyAPIUtil.updateToy;
  // window.createToy = toyAPIUtil.createToy;
  // window.deleteToy = toyAPIUtil.deleteToy;
  // window.requestAllToys = requestAllToys;
  // window.requestAllLease = requestAllLease;
  // window.requestOneToy = requestOneToy;
  // window.createToy = createToy;
  // window.updateToy = updateToy;
  // window.removeToy = removeToy;


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
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});
