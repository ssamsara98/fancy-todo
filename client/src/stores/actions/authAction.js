import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_AUTO_LOGIN } from './authType';

export const authLogin = () => ({
  type: AUTH_LOGIN,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const authTryAutoLogin = () => ({
  type: AUTH_AUTO_LOGIN,
});
