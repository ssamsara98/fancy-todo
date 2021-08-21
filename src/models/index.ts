import { Sequelize } from 'sequelize';
import databaseConfig from '../config/database';
import { todo, Todo } from './todo.model';

const env = (process.env.NODE_ENV as keyof typeof databaseConfig) || 'development';
const config = databaseConfig[env];

const sequelize = config.url ? new Sequelize(config.url, config) : new Sequelize(config);

export type Models = {
  todo: typeof Todo;
};

const models: Models = {
  todo: todo(sequelize),
};

Object.keys(models).forEach((modelName) => {
  if (!!models[modelName as keyof Models].associate) {
    models[modelName as keyof Models].associate(models);
  }
});

const db: Models & { sequelize: Sequelize; Sequelize: typeof Sequelize } = {
  ...models,
  sequelize,
  Sequelize,
};

export default db;
