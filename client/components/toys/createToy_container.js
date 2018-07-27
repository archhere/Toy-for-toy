import React from 'react';
import { connect } from 'react-redux';
import CreateToy from './createToy';
import { withRouter } from 'react-router-dom';
import { createToy} from '../../actions/toy_actions';
import cookie from 'react-cookies';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(state.filters);
  console.log(state.lease);
  let token = cookie.load('token');
  let currentUser;
  if (token) {
    let actualToken = token.split('.')[1];
    let userInfo = actualToken.replace('-', '+').replace('_', '/');
    currentUser = JSON.parse(window.atob(userInfo));
  }
  return {
    currentUser: currentUser,
  };

};

const mapDispatchToProps = (dispatch) => ({
  createToy: (toy) => dispatch(createToy(toy)),
  closeModal: () => dispatch(closeModal()),
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(CreateToy));
