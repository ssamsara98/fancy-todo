'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

function createTodos(n: number = 10) {
  const todos = [];
  for (let i = 1; i <= n; i++) {
    const todo = {
      id: i,
      author_id: Math.floor(Math.random() * 2) + 1,
      title: `test ${i}`,
      description: `testing ${i}`,
      status: !!Math.floor(Math.random() * 2) ? 'done' : 'ongoing',
      due_date: new Date(Date.now() + 1000 * 3600 * 24 * Math.random() * 30),
      created_at: new Date(),
      updated_at: new Date(),
    };
    todos.push(todo);
  }
  return todos;
}

export default {
  up: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    // await queryInterface.bulkInsert('todos', createTodos(20));
    await queryInterface.bulkInsert('todos', createTodos(100));
  },

  down: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('todos', {}, {});
  },
};
