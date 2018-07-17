import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './navbar';
import { withRouter } from 'react-router-dom';
import cookie from 'react-cookies';
import { logout } from '../../actions/session_action';

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.authenticated,
    token: state.user.profile.token,
    currentUser: state.user.profile.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
