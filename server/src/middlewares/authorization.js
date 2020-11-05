const createHttpError = require('http-errors');
const Todo = require('../models/todo');

const authorization = async (req, res, next) => {
  try {
    const { id: todo_id } = req.params;

    const todo = await Todo.findOne({ _id: todo_id });

    if (todo.user_id.equals(req.user._id) === false) throw createHttpError[403]('Access forbidden');

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = authorization;
