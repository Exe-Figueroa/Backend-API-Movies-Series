const config = require('../config/config.js');

const { Client } = require('pg');

function queryDatabase(query, values) {
  const connection = new Client({
    user: config.username,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.dbPort,
    ssl: false
  });

  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, result) => {
      if (err) {
        connection.end();
        reject(err);
      } else {
        connection.end();
        resolve(result);
      };
    });
  });
};


module.exports = queryDatabase;