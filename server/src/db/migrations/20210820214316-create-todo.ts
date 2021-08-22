'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    await queryInterface.createTable('todos', {
      id: {
        type: DT.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: DT.STRING,
        allowNull: false,
      },
      description: {
        type: DT.STRING,
        allowNull: false,
        defaultValue: '',
      },
      status: {
        type: DT.ENUM('ongoing', 'done'),
        allowNull: false,
        defaultValue: 'ongoing',
      },
      dueDate: {
        type: DT.DATE,
        allowNull: false,
        defaultValue: DT.NOW,
        field: 'due_date',
      },
      createdAt: {
        type: DT.DATE,
        allowNull: false,
        defaultValue: DT.NOW,
        field: 'created_at',
      },
      updatedAt: {
        type: DT.DATE,
        allowNull: false,
        defaultValue: DT.NOW,
        field: 'updated_at',
      },
    });
  },
  down: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    await queryInterface.dropTable('todos');
  },
};
