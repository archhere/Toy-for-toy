import { RECEIVE_TOY_ERRORS } from '../actions/toy_actions';
  import merge from 'lodash/merge';


  const toyErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_TOY_ERRORS:
      
        return action.payload.error;
      default:
        return state;
  }
};

export default toyErrorsReducer;
