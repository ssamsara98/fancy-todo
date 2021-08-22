'use strict';

import { DataTypes as DT, Model, Sequelize } from 'sequelize';
import { Models } from '.';

interface UserAttributes {
  id?: number;
  name: string;
  email: string;
  password: string;
  avatar?: string;
}

export class User extends Model<UserAttributes> implements UserAttributes {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  avatar?: string;

  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models: Models) {
    // define association here
    // todo
    this.hasMany(models.todo, { foreignKey: 'authorId' });
  }
}

export const user = (sequelize: Sequelize) => {
  User.init(
    {
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
    },
    {
      sequelize,
      modelName: 'user',
      underscored: true,
      defaultScope: { attributes: { exclude: ['password'] } },
    },
  );

  return User;
};
