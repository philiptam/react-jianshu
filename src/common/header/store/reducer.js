import * as actionTypes from './contants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: []
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.SEARCH_FOUCE:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      return state.set('list', action.data);
    default:
      return state;
  }
}