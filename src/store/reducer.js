import { combineReducers } from 'redux-immutable';
import {reducer as headerReducer} from './../common/header/store';

//combineReducers 整合所有reducer
export default combineReducers({
  header: headerReducer
});