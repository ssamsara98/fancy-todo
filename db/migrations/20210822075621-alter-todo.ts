'use strict';

import { DataTypes, QueryInterface } from 'sequelize/types';

export default {
  up: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('todos', 'author_id', {
      type: DT.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    });
  },

  down: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('todos', 'author_id');
  },
};
