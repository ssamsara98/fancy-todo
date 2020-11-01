const express = require('express');

const TodoController = require('../controllers/todos-controller');

const todosRouter = express.Router();

todosRouter.param(':id', TodoController.checkId);

todosRouter.route('/').post(TodoController.createTodo).get(TodoController.getTodoAll);

todosRouter
  .route('/:id')
  .get(TodoController.getTodo)
  .put(TodoController.updateTodo)
  .delete(TodoController.deleteTodo);

todosRouter.patch('/:id/done', TodoController.updateTodoDone);
todosRouter.patch('/:id/undone', TodoController.updateTodoUndone);

module.exports = todosRouter;
