import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import modalReducer from './modal_reducer';


const rootReducer = combineReducers({

  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
  
});

export default rootReducer;
