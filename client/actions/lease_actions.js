import * as LeaseAPIUtil from '../util/lease_util.js';
export const RECEIVE_ALL_LEASE = 'RECEIVE_ALL_LEASE';
export const RECEIVE_ONE_LEASE = 'RECEIVE_ONE_LEASE';
export const REMOVE_LEASE = 'REMOVE_LEASE';


export const requestOneLease = (toyId,leaseId) => dispatch => {
  return LeaseAPIUtil.fetchOneLease(toyId,leaseId).then(response =>
    dispatch({ type: RECEIVE_ONE_LEASE, payload: response })
  );
};

export const requestAllLease = (toy) => dispatch => {
  return LeaseAPIUtil.fetchAllLease(toy).then(response =>
    dispatch({ type: RECEIVE_ALL_LEASE, payload: response })
  );
};

export const createLease = lease => dispatch => {
  return LeaseAPIUtil.createLease(lease).then(response =>
    dispatch({ type: RECEIVE_ONE_LEASE, payload: response })
  );
};

export const updateLease = lease => dispatch => {
  return LeaseAPIUtil.updateLease(lease).then(response =>
    dispatch({ type: RECEIVE_ONE_LEASE, payload: response })
  );
};

export const removeLease = (toyId,leaseId) => dispatch => {
  LeaseAPIUtil.deleteLease(toyId,leaseId)
  .then(res => dispatch({type: REMOVE_LEASE, id: leaseId}));
};
