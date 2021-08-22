import { Router } from 'express';
import UserController from '../controllers/user.controller';
import authMw from '../middlewares/auth.mw';

const userRouter = Router();

userRouter.use(authMw);
userRouter.get('/me', UserController.me);

export default userRouter;
