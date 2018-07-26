import { RECEIVE_ONE_LEASE, RECEIVE_ALL_LEASE, REMOVE_LEASE } from '../actions/lease_actions';
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
      newlease.forEach((lease) => {
        hash_lease[lease._id] = lease;
      });
      return hash_lease;
    case REMOVE_LEASE:
      newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
    }
  };

  export default leaseReducer;