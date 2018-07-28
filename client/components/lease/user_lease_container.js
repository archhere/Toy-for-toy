import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserLease from './user_lease';
import { requestAllToysLease } from '../../actions/lease_actions';
import { requestAllToys } from '../../actions/toy_actions';
import cookie from 'react-cookies';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    lease: Object.values(state.lease),
    currentUser: currentUser,
    toys: Object.values(state.toys),
  };

};

const mapDispatchToProps = (dispatch) => ({
  requestAllToysLease: () => dispatch(requestAllToysLease()),
  requestAllToys: () => dispatch(requestAllToys()),
  openModal: (modal) => dispatch(openModal(modal)),
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(UserLease));
