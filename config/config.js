require('dotenv').config();
console.log(process.env.USERNAME)

const config = {
  host: process.env.HOST,
  database: process.env.DB,
  password: process.env.PASSWORD,
  username: process.env.USERNAME_DB
};

module.exports = config;