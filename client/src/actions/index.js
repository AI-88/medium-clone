import axios from 'axios';
import * as types from './types';

export const fetchCurrentUserData = () => async dispatch => {
  dispatch({ type: types.AUTH_USER_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/current_user');
    const { data } = request;
    dispatch({ type: types.AUTH_USER_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.AUTH_USER_FAIL, payload: e });
  }
};

export const fetchPostsData = () => async dispatch => {
  dispatch({ type: types.FETCH_POSTS_REQUEST, payload: true });
  try {
    const request = await axios.get('/api/posts');
    const { data } = request;
    dispatch({ type: types.FETCH_POSTS_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.FETCH_POSTS_FAIL, payload: e });
  }
};

export const addNewPost = values => async dispatch => {
  dispatch({ type: types.ADD_NEW_POST_REQUEST, payload: true });
  try {
    const request = await axios.post('/api/posts', values);
    const { data } = request;
    dispatch({ type: types.ADD_NEW_POST_SUCCESS, payload: data });
  } catch (e) {
    dispatch({ type: types.ADD_NEW_POST_FAIL, payload: e });
  }
};
