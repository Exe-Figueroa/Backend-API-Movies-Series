require('dotenv').config();


const config = {
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  username: process.env.USERNAME
};

module.exports = config;