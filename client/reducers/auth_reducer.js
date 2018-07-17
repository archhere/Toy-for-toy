import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, CLEARERRORS, RECEIVE_CURRENT_USER } from '../actions/session_action';
import merge from 'lodash/merge';

const INITIAL_STATE = { error: '', user: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
  Object.freeze(state);
  switch (action.type) {
    case AUTH_USER:
      return merge({}, state,{authenticated: true});
    case UNAUTH_USER:
      return merge({}, state,{authenticated: false, error: action.payload});
    case AUTH_ERROR:
      return merge({}, state,{authenticated: false, error: action.payload});
    case CLEARERRORS:
      return [];
    default:
      return state;
  }
}
