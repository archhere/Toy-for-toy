import React from 'react';
import { connect } from 'react-redux';
import ToyIndex from './toyIndex';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import {requestOneToy,
  requestAllToys,
  createToy} from '../../actions/toy_actions';


const mapStateToProps = state => {
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    toys: Object.values(state.toys),
    currentUserId: currentUser._id,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchToys: () => dispatch(requestAllToys())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToyIndex));
