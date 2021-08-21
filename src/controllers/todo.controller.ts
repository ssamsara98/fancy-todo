import createHttpError from 'http-errors';
import db from '../models';
import { Todo } from '../models/todo.model';
import { PaginationQuery, PaginationResponse } from '../types/pagination';
import catchAsync from '../utils/catch-async.util';

interface CreateTodo {
  title: string;
  description: string;
  dueDate: Date;
}

interface UpdateTodo {
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: 'ongoing' | 'done';
}

class TodoController {
  static createTodo = catchAsync<{}, Todo, CreateTodo>(async (req, res) => {
    const { title, description, dueDate } = req.body;
    const todo = await db.todo.create({
      title,
      description,
      dueDate,
    });

    res.status(201);
    res.json(todo);
    return;
  });

  static getTodoList = catchAsync<{}, PaginationResponse<Todo>, any, PaginationQuery>(
    async (req, res) => {
      const { page = 1, limit = 10 } = req.query;
      const offset = ((page < 1 ? 1 : page) - 1) * limit;

      const count = await db.todo.count();
      const total = Math.ceil(count / limit);

      if (page > total) throw createHttpError(400, 'Invalid Page');

      const todos = await db.todo.findAll({
        offset,
        limit,
      });

      res.json({
        prev: page <= 1 ? null : `?page=${page - 1}&limit=${limit}`,
        next: page >= total ? null : `?page=${parseInt(`${page}`) + 1}&limit=${limit}`,
        count: todos.length,
        total,
        result: todos,
      });
      return;
    },
  );

  static getTodo = catchAsync<{ todo_id: number }, Todo | null>(async (req, res) => {
    const { todo_id: todoId } = req.params;
    const todo = await db.todo.findByPk(todoId);

    res.json(todo);
    return;
  });

  static updateTodo = catchAsync<{ todo_id: number }, Todo, UpdateTodo>(async (req, res) => {
    const { todo_id: todoId } = req.params;
    const { title, description, status, dueDate } = req.body;
    const todo = await db.todo.findByPk(todoId);

    if (!todo) throw createHttpError(404);

    await todo.update({
      title,
      description,
      status,
      dueDate,
    });
    await todo.reload();

    res.json(todo);
    return;
  });

  static deleteTodo = catchAsync<{ todo_id: number }, Todo>(async (req, res) => {
    const { todo_id: todoId } = req.params;
    const todo = await db.todo.findByPk(todoId);

    if (!todo) {
      createHttpError(404);
      return;
    }

    await todo.destroy();

    res.json(todo);
    return;
  });
}

export default TodoController;
