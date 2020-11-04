import { AUTH_LOGIN, AUTH_LOGOUT } from '../actions/authType';

const initialState = { isLogin: false, token: '' };

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return {
        ...state,
        isLogin: true,
        token: localStorage.getItem('token'),
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        isLogin: false,
        token: '',
      };
    default:
      return state;
  }
};

export default authReducer;
