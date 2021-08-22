import { Router } from 'express';
import authRouter from './routes/auth.router';
import todoRouter from './routes/todo.router';
import userRouter from './routes/user.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/todos', todoRouter);

export default router;
