import { combineReducers } from 'redux';
import leaseErrorsReducer from './lease_errors_reducer';


const errorsReducer = combineReducers({
  lease: leaseErrorsReducer,

});

export default errorsReducer;
