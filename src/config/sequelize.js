import { Sequelize } from 'sequelize';

import { development } from './config.js';

const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    port: development.port,
    dialect: development.dialect
  }
);

export default sequelize;