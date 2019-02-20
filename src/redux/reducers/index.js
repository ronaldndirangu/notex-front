import { combineReducers } from 'redux';
import auth from './authReducer';
import notes from './noteReducer';

const rootReducer = combineReducers({
  auth,
  notes
});

export default rootReducer;
