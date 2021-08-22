import { sign, verify } from 'jsonwebtoken';

export const signAccessToken = (payload: string | Buffer | object) => {
  return sign(payload, process.env.JWT_SECRET!, {
    expiresIn: process.env.NODE_ENV === 'development' ? '1h' : '30d',
  });
};

export const verifyAccessToken = (token: string) => {
  return verify(token, process.env.JWT_SECRET!);
};
