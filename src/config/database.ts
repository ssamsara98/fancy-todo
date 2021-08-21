import { Options } from 'sequelize/types';

const databaseConfig: {
  development: Options & { url: string };
  test: Options & { url: string };
  production: Options & { url: string };
} = {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL!,
  },
  test: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL!,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL!,
  },
};

export default databaseConfig;
