import { RECEIVE_LEASE_ERRORS } from '../actions/lease_actions';
  import merge from 'lodash/merge';


  const leaseErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_LEASE_ERRORS:
      console.log(action);
        return action.payload.error;
      default:
        return state;
  }
};

export default leaseErrorsReducer;
