'use strict';

import { DataTypes, QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    await queryInterface.createTable('users', {
      id: {
        type: DT.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DT.STRING,
        allowNull: false,
      },
      email: {
        type: DT.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DT.STRING,
        allowNull: false,
      },
      avatar: {
        type: DT.TEXT,
        allowNull: false,
        defaultValue:
          'https://cdn3.iconfinder.com/data/icons/galaxy-open-line-gradient-i/200/account-256.png',
      },
      createdAt: {
        type: DT.DATE,
        allowNull: false,
        field: 'created_at',
      },
      updatedAt: {
        type: DT.DATE,
        allowNull: false,
        field: 'updated_at',
      },
    });
  },
  down: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    await queryInterface.dropTable('users');
  },
};
