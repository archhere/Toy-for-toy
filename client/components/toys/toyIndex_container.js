import React from 'react';
import { connect } from 'react-redux';
import ToyIndex from './toyIndex';
import {
  receiveFilter,
  receiveGroupFilter,
} from '../../actions/filter_actions';
import { withRouter } from 'react-router-dom';
import {requestOneToy,
  requestAllToys,
  createToy} from '../../actions/toy_actions';
  import cookie from 'react-cookies';



const mapStateToProps = state => {
  // let token = cookie.load('token');
  // let currentUser;
  // if (token) {
  //   let actualToken = token.split('.')[1];
  //   let userInfo = actualToken.replace('-', '+').replace('_', '/');
  //   currentUser = JSON.parse(window.atob(userInfo));
  // }
  return {
    toys: Object.values(state.toys),
    filters: state.filters,
    // currentUserId: currentUser._id,
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    receiveFilter: filter => dispatch(receiveFilter(filter)),
    receiveGroupFilter: capacity => dispatch(receiveGroupFilter(capacity)),
    fetchToys: () => dispatch(requestAllToys())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToyIndex));
