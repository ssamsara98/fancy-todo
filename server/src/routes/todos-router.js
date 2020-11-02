const express = require('express');

const TodosController = require('../controllers/todos-controller');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');

const todosRouter = express.Router();

todosRouter.use(authentication);

todosRouter.param('id', TodosController.checkId);

todosRouter.route('/').post(TodosController.createTodo).get(TodosController.getTodoAll);

todosRouter
  .route('/:id')
  .all(authorization)
  .get(TodosController.getTodo)
  .put(TodosController.updateTodo)
  .delete(TodosController.deleteTodo);

todosRouter.patch('/:id/done', authorization, TodosController.updateTodoDone);
todosRouter.patch('/:id/undone', authorization, TodosController.updateTodoUndone);

module.exports = todosRouter;
