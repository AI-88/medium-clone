import { FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAIL } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: '',
  errorMsg: null
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        data: [],
        isFetching: payload,
        errorMsg: null
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false,
        errorMsg: null
      };
    case FETCH_POSTS_FAIL:
      return {
        ...state,
        data: [],
        isFetching: false,
        errorMsg: payload
      };
    default:
      return state;
  }
};

export default postsReducer;
