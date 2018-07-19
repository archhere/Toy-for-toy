import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import modalReducer from './modal_reducer';
import toyReducer from './toy_reducer';

const rootReducer = combineReducers({

  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
  toys: toyReducer,
});

export default rootReducer;
