import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import UserLease from './user_lease';
import { requestAllToysLease } from '../../actions/lease_actions';
import { requestAllToys } from '../../actions/toy_actions';


const mapStateToProps = (state, ownProps) => {
  console.log(state.filters);
  console.log(state.lease);
  return {
    lease: Object.values(state.lease),
    currentUser: state.user.profile.user,
    toys: Object.values(state.toys),
  };

};

const mapDispatchToProps = (dispatch) => ({
  requestAllToysLease: () => dispatch(requestAllToysLease()),
  requestAllToys: () => dispatch(requestAllToys()),
});

export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(UserLease));
