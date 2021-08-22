'use strict';

import { DataTypes as DT, Model, Optional, Sequelize } from 'sequelize';
import { Models } from '.';

interface TodoAttributes {
  id: number;
  authorId: number;
  title: string;
  description: string;
  status?: 'ongoing' | 'done';
  dueDate: Date;
}

interface TodoCreationAttributes extends Optional<TodoAttributes, 'id'> {}

export class Todo extends Model<TodoAttributes, TodoCreationAttributes> implements TodoAttributes {
  id!: number;
  authorId!: number;
  title!: string;
  description!: string;
  status!: 'ongoing' | 'done';
  dueDate!: Date;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    // user
    this.belongsTo(models.user, { foreignKey: 'authorId', as: 'author' });
  }
}

export const todo = (sequelize: Sequelize) => {
  Todo.init(
    {
      id: {
        type: DT.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      authorId: {
        type: DT.INTEGER,
        allowNull: false,
        field: 'author_id',
        references: {
          model: 'users',
          key: 'id',
        },
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
    },
    {
      sequelize,
      modelName: 'todo',
      underscored: true,
    },
  );

  return Todo;
};
