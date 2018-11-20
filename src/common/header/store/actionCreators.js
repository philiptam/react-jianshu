import * as actionTypes from './contants';
import axios from 'axios';
import {fromJS} from 'immutable';

export const searchFocus = () => ({
  type: actionTypes.SEARCH_FOUCE
});

export const searchBlur = () => ({
  type: actionTypes.SEARCH_BLUR
});

const changeList = (data) => ({
  type: actionTypes.CHANGE_LIST,
  data: fromJS(data)
});

// 派发异步请求
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error');
    })
  }
};