import { ADD_NEW_POST_REQUEST, ADD_NEW_POST_SUCCESS, ADD_NEW_POST_FAIL } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: '',
  errorMsg: null
};

const postsReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_NEW_POST_REQUEST:
      return {
        ...state,
        data: [],
        isFetching: payload,
        errorMsg: null
      };
    case ADD_NEW_POST_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false,
        errorMsg: null
      };
    case ADD_NEW_POST_FAIL:
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
