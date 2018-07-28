import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import userReducer from './user_reducer';
import modalReducer from './modal_reducer';
import toyReducer from './toy_reducer';
import filterReducer from './filters_reducer';
import leaseReducer from './lease_reducer';
import leaseErrorsReducer from './lease_errors_reducer';
import toyErrorsReducer from './toy_errors_reducer';

const rootReducer = combineReducers({

  auth: authReducer,
  user: userReducer,
  modal: modalReducer,
  toys: toyReducer,
  filters: filterReducer,
  lease: leaseReducer,
  // leaseErrors: leaseErrorsReducer,
  toyErrors: toyErrorsReducer,
});

export default rootReducer;
