import * as actionTypes from './contants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOUCE) {
    // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
    return state.set('focused', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focused', false);
  }
  if (action.type === actionTypes.CHANGE_LIST) {
    return state.set('list', action.data);
  }
  return state;
}