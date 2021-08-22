import { Router } from 'express';
import authRouter from './routes/auth.router';
import todoRouter from './routes/todo.router';

const router = Router();

router.use('/auth', authRouter);
router.use('/todos', todoRouter);

export default router;
