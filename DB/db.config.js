const mysql = require('mysql2');
const config = require('../config/config.js');

const connection = mysql.createConnection({
  host: config.host,
  user: config.username,
  password: config.password,
  database: config.database,
});


module.exports = connection;