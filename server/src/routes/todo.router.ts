import { Router } from 'express';
import TodoController from '../controllers/todo.controller';

const todoRouter = Router();

todoRouter.get('/', TodoController.getTodoList);

export default todoRouter;
