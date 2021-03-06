import * as LeaseAPIUtil from '../util/lease_util.js';
export const RECEIVE_ALL_LEASE = 'RECEIVE_ALL_LEASE';
export const RECEIVE_ALL_TOYS_LEASE = 'RECEIVE_ALL_TOYS_LEASE';
export const RECEIVE_ONE_LEASE = 'RECEIVE_ONE_LEASE';
export const REMOVE_LEASE = 'REMOVE_LEASE';
export const RECEIVE_LEASE_ERRORS = "RECEIVE_LEASE_ERRORS";
export const CLEARERRORS = 'CLEARERRORS';



export const clearErrors = errors => ({
  type: CLEARERRORS,
  errors
});

export const requestOneLease = (toyId,leaseId) => dispatch => {
  return LeaseAPIUtil.fetchOneLease(toyId,leaseId).then(response => {
  dispatch({ type: RECEIVE_ONE_LEASE, payload: response });
  },(error) => {
      LeaseAPIUtil.errorHandler(dispatch,error,RECEIVE_LEASE_ERRORS);
    });
};

export const requestAllLease = (toyId) => dispatch => {
  return LeaseAPIUtil.fetchAllLease(toyId).then(response => {
    dispatch({ type: RECEIVE_ALL_LEASE, payload: response });
  },(error) => {
      LeaseAPIUtil.errorHandler(dispatch,error,RECEIVE_LEASE_ERRORS);
    });
};

export const requestAllToysLease = () => dispatch => {
  return LeaseAPIUtil.fetchAllToysLease().then(response => {
    dispatch({ type: RECEIVE_ALL_TOYS_LEASE, payload: response});
  },(error) => {
    LeaseAPIUtil.errorHandler(dispatch,error,RECEIVE_ALL_TOYS_LEASE);
  });
};

export const createLease = lease => dispatch => {
  return LeaseAPIUtil.createLease(lease).then(response => {
    dispatch({ type: RECEIVE_ONE_LEASE, payload: response });
  }, (error) => {
      LeaseAPIUtil.errorHandler(dispatch,error,RECEIVE_LEASE_ERRORS);
  });
};

export const updateLease = lease => dispatch => {
  return LeaseAPIUtil.updateLease(lease).then(response => {
    dispatch({ type: RECEIVE_ONE_LEASE, payload: response });
  },(error) => {
      LeaseAPIUtil.errorHandler(dispatch,error,RECEIVE_LEASE_ERRORS);
  });
};

export const removeLease = (toyId,leaseId) => dispatch => {
  LeaseAPIUtil.deleteLease(toyId,leaseId)
  .then(res => dispatch({type: REMOVE_LEASE, id: leaseId}));
};

export const receiveLeaseErrors = (errors) => ({
  type: RECEIVE_LEASE_ERRORS,
  errors
});
