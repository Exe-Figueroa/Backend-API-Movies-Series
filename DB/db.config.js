const config = require('../config/config.js');

const { Client } = require('pg');

const connection = new Client({
  user: config.username,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.dbPort,
  ssl: false
});

connection.connect();
function queryDatabase(query, values) {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      };
    });
  });
};


module.exports = queryDatabase;