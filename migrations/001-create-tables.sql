CREATE TABLE movies (
  id serial PRIMARY KEY, 
  title varchar(255), 
  description text,release_year int, 
  img varchar(255), 
  category varchar
  );
CREATE TABLE series (
  id serial PRIMARY KEY, 
  title varchar(255), 
  description text,release_year int, 
  img varchar(255), 
  category varchar
  );