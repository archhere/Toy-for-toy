import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CreateMyLease from './create_lease';
import { createLease,receiveLeaseErrors,requestAllLease } from '../../actions/lease_actions';
import { closeModal } from '../../actions/modal_actions';

const mapStateToProps = (state,ownProps) => {
  const currentDate = new Date();
  console.log(currentDate.constructor.name);
  const minDate = currentDate.toJSON().slice(0, 10);

  function addDays(theDate, days) {
    return new Date(theDate.getTime() + days*24*60*60*1000);
  }

  let max = addDays(currentDate,14);
  let maxDate = max.toJSON().slice(0, 10);

  const errors = state.leaseErrors;
  console.log("state",state);
  console.log("ownProps",ownProps);
  console.log(ownProps.toy.owner_id);
  console.log("lease",state);
  return {
    currentToy: ownProps.toy,
    currentUser: state.user.profile.user,
    minDate,
    maxDate,
    lease: Object.values(state.lease),
    // errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createLease: (lease) => dispatch(createLease(lease)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(receiveLeaseErrors([])),
    requestAllLease: (id) => dispatch(requestAllLease(id)),
  };
};


export default withRouter(connect(mapStateToProps,
  mapDispatchToProps)(CreateMyLease));
