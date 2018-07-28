import { RECEIVE_ONE_LEASE, RECEIVE_ALL_LEASE, REMOVE_LEASE, RECEIVE_ALL_TOYS_LEASE, RECEIVE_LEASE_ERRORS } from '../actions/lease_actions';
import merge from 'lodash/merge';

const leaseReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ONE_LEASE:
      let newState = merge({}, state);
      let lease = JSON.parse(action.payload);
      newState[lease._id] = lease;
      return newState;
    case RECEIVE_ALL_LEASE:
    
      let newlease = JSON.parse(action.payload);
      let hash_lease = {};
      newlease.forEach((value) => {
        hash_lease[value._id] = value;
      });
      return hash_lease;
    case RECEIVE_ALL_TOYS_LEASE:

      let allLease = JSON.parse(action.payload);
      let hashLease = {};
      allLease.forEach((value) => {
      hashLease[value._id] = value;
      });
    return hashLease;
    case REMOVE_LEASE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
    }
  };

  export default leaseReducer;
