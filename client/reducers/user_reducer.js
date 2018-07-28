import { RECEIVE_CURRENT_USER, UNAUTH_USER } from '../actions/session_action';
import merge from 'lodash/merge';

const userReducer = (state={ profile: {}, error: '' },action) => {
  Object.freeze(state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      
      return merge({}, state,{profile: JSON.parse(action.currentUser)});
    case UNAUTH_USER:
      return merge({}, state,{profile: {} });
    default:
      return state;
  }
};

export default userReducer;
