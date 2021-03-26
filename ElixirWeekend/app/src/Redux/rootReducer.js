import { combineReducers } from 'redux';
import applicationReducer from './Application/applicationReducer';

const rootReducer = combineReducers({
  applicationReducer,
});
export default rootReducer;
