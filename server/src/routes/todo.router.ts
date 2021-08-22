import { Router } from 'express';
import TodoController from '../controllers/todo.controller';
import authMw from '../middlewares/auth.mw';

const todoRouter = Router();

todoRouter.use(authMw);
todoRouter.post('/', TodoController.createTodo);
todoRouter.get('/', TodoController.getTodoList);
todoRouter.get('/:todo_id', TodoController.getTodo);
todoRouter.patch('/:todo_id', TodoController.updateTodo);
todoRouter.delete('/:todo_id', TodoController.deleteTodo);

export default todoRouter;
