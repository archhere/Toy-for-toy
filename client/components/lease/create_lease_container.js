import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateMyLease from './create_lease';
import { createLease,receiveLeaseErrors } from '../../actions/lease_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state,ownProps) => {
  const currentDate = new Date();
  const minDate = currentDate.toJSON().slice(0, 10);
  console.log("state",state);
  console.log("ownProps",ownProps);
  console.log(ownProps.toy.owner_id);
  return {
    currentToy: ownProps.toy,
    currentUser: state.user.profile.user,
    minDate,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLease: (lease) => dispatch(createLease(lease)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveLeaseErrors([])),
  };
};


export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(CreateMyLease));
