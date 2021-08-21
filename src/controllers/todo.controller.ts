import db from '../models';
import { Todo } from '../models/todo.model';
import { PaginationQuery, PaginationResponse } from '../types/pagination';
import catchAsync from '../utils/catch-async.util';

class TodoController {
  static getTodoList = catchAsync<{}, PaginationResponse<Todo>, any, PaginationQuery>(
    async (req, res) => {
      const { page = 1, limit = 10 } = req.query;
      const offset = ((page < 1 ? 1 : page) - 1) * limit;

      const [todos, count] = await Promise.all([
        db.todo.findAll({
          offset,
          limit,
        }),
        db.todo.count(),
      ]);

      const total = Math.ceil(count / limit);
      res.json({
        prev: page <= 1 ? null : `?page=${page - 1}&limit=${limit}`,
        next: page >= total ? null : `?page=${parseInt(`${page}`) + 1}&limit=${limit}`,
        count,
        total,
        result: todos,
      });

      return;
    },
  );
}

export default TodoController;
