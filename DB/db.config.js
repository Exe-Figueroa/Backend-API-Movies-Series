const config = require('../config/config.js');

const { Client } = require('pg');

const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'api_movies_and_series',
  password: 'cantera2023',
  port: 5432,
});
client.connect();

const moviesTable = 'CREATE TABLE movies (id SERIAL PRIMARY KEY,title VARCHAR(255), description TEXT, img VARCHAR(255), release_year INTEGER )';
const seriesTable = 'CREATE TABLE series (id SERIAL PRIMARY KEY,title VARCHAR(255), description TEXT, img VARCHAR(255), release_year INTEGER )';

client.query('SELECT * FROM movies', (err, res)=>{
  if (!err) {
    console.log('err no existe');
    console.log(res);
  } else {
    console.error(err);
  }
  client.end()
});