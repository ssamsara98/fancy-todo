import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_AUTO_LOGIN } from '../actions/authType';

const initialState = { isLogin: false, token: null };

const authLogin = (state) => {
  return {
    ...state,
    isLogin: true,
    token: localStorage.getItem('token'),
  };
};

const authLogout = (state) => {
  return {
    ...state,
    isLogin: false,
    token: null,
  };
};

const authAutoLogin = (state) => {
  const isTokenExist = localStorage.getItem('token');

  return isTokenExist ? authLogin(state) : authLogout(state);
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_LOGIN:
      return authLogin(state);
    case AUTH_LOGOUT:
      return authLogout(state);
    case AUTH_AUTO_LOGIN:
      return authAutoLogin(state);
    default:
      return state;
  }
};

export default authReducer;
