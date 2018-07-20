import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from './slider';
import { withRouter } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state,ownProps) => {
  return {
    loggedIn: state.auth.authenticated,
    token: state.user.profile.token,
    currentUser: state.user.profile.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Slider));
