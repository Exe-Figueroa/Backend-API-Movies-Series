const queryDatabase = require('../DB/db.config.js');
const moviesTableQuery = 'CREATE TABLE movies (id serial PRIMARY KEY, title varchar(255), description text,release_year int, img varchar(255), category varchar)';
const seriesTableQuery = 'CREATE TABLE series (id serial PRIMARY KEY, title varchar(255), description text,release_year int, img varchar(255), category varchar(20))';
queryDatabase(moviesTableQuery);
queryDatabase(seriesTableQuery);
