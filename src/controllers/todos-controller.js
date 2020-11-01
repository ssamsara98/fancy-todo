const createHttpError = require('http-errors');
const mongoose = require('mongoose');

const Todo = require('../models/todo');

function checkMongoError(e) {
  if (e instanceof mongoose.Error) {
    if (e.name == 'ValidationError') e.status = 400;
  }
}

class TodoController {
  static async checkId(req, res, next) {
    try {
      const { id: _id } = req.params;
      const todo = await Todo.findOne({ _id });

      if (todo === null) throw createHttpError[404]('Todo not Found!');

      next();
    } catch (err) {
      next(err);
    }
  }

  static async createTodo(req, res, next) {
    try {
      const { title, description, status, due_date } = req.body;

      const todo = new Todo({ title, description, status, due_date });

      await todo.save();

      res.status(201);
      res.json(todo);
    } catch (err) {
      checkMongoError(err);
      next(err);
    }
  }

  static async getTodoAll(req, res, next) {
    try {
      const todos = await Todo.find();

      res.status(200);
      res.json(todos);
    } catch (err) {
      next(err);
    }
  }

  static async getTodo(req, res, next) {
    try {
      const { id: _id } = req.params;

      const todo = await Todo.findOne({ _id });

      res.status(200);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  }

  static async updateTodo(req, res, next) {
    try {
      const { id: _id } = req.params;
      const { title, description, status, due_date } = req.body;

      const todo = await Todo.findOneAndUpdate(
        { _id },
        {
          title,
          description,
          status,
          due_date,
        },
        {
          new: true,
          runValidators: true,
        },
      );

      res.status(200);
      res.json(todo);
    } catch (err) {
      checkMongoError(err);
      next(err);
    }
  }

  static async updateTodoDone(req, res, next) {
    try {
      const { id: _id } = req.params;

      const todo = await Todo.findOneAndUpdate(
        { _id },
        {
          $set: {
            status: 1,
          },
        },
        {
          new: true,
          runValidators: true,
        },
      );

      res.status(200);
      res.json(todo);
    } catch (err) {
      checkMongoError(err);
      next(err);
    }
  }

  static async updateTodoUndone(req, res, next) {
    try {
      const { id: _id } = req.params;

      const todo = await Todo.findOneAndUpdate(
        { _id },
        {
          $set: {
            status: 0,
          },
        },
        {
          new: true,
          runValidators: true,
        },
      );

      res.status(200);
      res.json(todo);
    } catch (err) {
      checkMongoError(err);
      next(err);
    }
  }

  static async deleteTodo(req, res, next) {
    try {
      const { id: _id } = req.params;

      const todo = await Todo.findOneAndDelete({ _id });

      res.status(200);
      res.json(todo);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = TodoController;
