import { AUTH_LOGIN, AUTH_LOGOUT } from './authType';

export const authLogin = () => ({
  type: AUTH_LOGIN,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});
