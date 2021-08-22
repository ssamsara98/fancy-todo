import { Options } from 'sequelize';

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
    ssl: true,
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

export default databaseConfig;
