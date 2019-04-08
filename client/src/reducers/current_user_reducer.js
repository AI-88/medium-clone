import { AUTH_USER_REQUEST, AUTH_USER_SUCCESS, AUTH_USER_FAIL } from '../actions/types';

const INITIAL_STATE = {
  data: [],
  isFetching: false,
  errorMsg: null
};

const currentUserReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case AUTH_USER_REQUEST:
      return {
        ...state,
        isFetching: payload
      };
    case AUTH_USER_SUCCESS:
      return {
        ...state,
        data: payload,
        isFetching: false,
        errorMsg: null
      };
    case AUTH_USER_FAIL:
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

export default currentUserReducer;
