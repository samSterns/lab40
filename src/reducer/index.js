import { combineReducers } from 'redux';
import userData from './userReducer';
import repoData from './repoReducer';

export default combineReducers({
  userData,
  repoData
});
