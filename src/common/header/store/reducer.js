import * as actionTypes from './contants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 0,
  totolPage: 1
});

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.SEARCH_FOUCE:
      return state.set('focused', true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.CHANGE_LIST:
      // 可以用merge替换set这样的链式写法
      return state.merge({
        'list': action.data,
        'totolPage': action.totolPage
      });
    // return state.set('list', action.data).set();
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.CHANGE_PAGE:
      return state.set('page', action.page);
    default:
      return state;
  }
}