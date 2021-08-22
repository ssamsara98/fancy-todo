import createHttpError from 'http-errors';
import db from '../models';
import { User } from '../models/user.model';
import catchAsync from '../utils/catch-async.util';

interface RegisterDto {
  name: string;
  email: string;
  password: string;
}

interface LoginDto {
  email: string;
  password: string;
}

class AuthController {
  static register = catchAsync<{}, User, RegisterDto>(async (req, res) => {
    const { name, email, password } = req.body;

    const foundUser = await db.user.findOne({ where: { email } });
    if (foundUser) throw createHttpError(400, 'Email already exist');

    const user = await db.user.create({ name, email, password });
    user.setDataValue('password', undefined!);

    res.status(201);
    res.json(user);
    return;
  });

  static login = catchAsync<{}, User, LoginDto>(async (req, res) => {
    const { email, password } = req.body;

    const user = await db.user.findOne({ where: { email }, attributes: { include: ['password'] } });

    if (!user) throw createHttpError(401, 'Email or Password is invalid');

    const match = await user.comparePassword(password);
    if (!match) throw createHttpError(401, 'Email or Password is invalid');
    user.setDataValue('password', undefined!);

    res.json(user);
    return;
  });
}

export default AuthController;
