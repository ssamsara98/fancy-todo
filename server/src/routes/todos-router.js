const express = require('express');

const TodosController = require('../controllers/todos-controller');

const todosRouter = express.Router();

todosRouter.param(':id', TodosController.checkId);

todosRouter.route('/').post(TodosController.createTodo).get(TodosController.getTodoAll);

todosRouter
  .route('/:id')
  .get(TodosController.getTodo)
  .put(TodosController.updateTodo)
  .delete(TodosController.deleteTodo);

todosRouter.patch('/:id/done', TodosController.updateTodoDone);
todosRouter.patch('/:id/undone', TodosController.updateTodoUndone);

module.exports = todosRouter;
