import { combineReducers } from 'redux';
import  loginReducer  from './Login/loginReducer';
import applicationReducer from './Application/applicationReducer';

const rootReducer = combineReducers({
  applicationReducer,
  loginReducer
});
export default rootReducer;
