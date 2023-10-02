require('dotenv').config();

const config = {
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  username: process.env.DB_USERNAME,
  port: process.env.PORT,
  dbPort: process.env.DB_PORT,
};

module.exports = config;