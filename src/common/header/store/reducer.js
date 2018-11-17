import * as actionTypes from './contants';

const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOUCE) {
    return {
      focused: true
    };
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return {
      focused: false
    };
  }
  return state;
}