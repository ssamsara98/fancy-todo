const databaseConfig = {
  development: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  test: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
  },
  production: {
    dialect: 'postgres',
    url: process.env.DATABASE_URL,
    ssl: true,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};

module.exports = databaseConfig;
