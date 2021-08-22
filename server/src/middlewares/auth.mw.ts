import createHttpError from 'http-errors';
import { JwtPayload } from 'jsonwebtoken';
import db from '../models';
import catchAsync from '../utils/catch-async.helper';
import { verifyAccessToken } from '../utils/jwt.helper';

const authMw = catchAsync(async (req, res, next) => {
  if (!req.headers.authorization) throw createHttpError(401);

  const token = req.headers.authorization.replace('Token ', '');
  const payload = verifyAccessToken(token) as JwtPayload;

  const user = await db.user.findByPk(payload.sub);

  if (!user) throw createHttpError(403);

  (req as any).user = user;

  next();
  return;
});

export default authMw;
