import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateMyLease from './create_lease';
import { createLease } from '../../actions/lease_actions';
import { requestOneToy } from '../../actions/toy_actions';

const mapStateToProps = (state,ownProps) => {
  const currentDate = new Date();
  const minDate = currentDate.toJSON().slice(0, 10);
  console.log("state",state);
  console.log("ownProps",ownProps);
  return {
    currentToy: state.toy,
    currentToyId: ownProps.match.params.toyId,
    currentUser: state.user.profile.user,
    minDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLease: (lease) => dispatch(createLease(lease)),
    requestOneToy: (id) => dispatch(requestOneToy(id))
  };
};


export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(CreateMyLease));
