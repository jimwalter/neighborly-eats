/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

-- DROP db if already exists
DROP DATABASE IF EXISTS neighborly_db;

-- CREATE the db
CREATE DATABASE neighborly_db;

-- USE db
USE neighborly_db;

-- CREATE table(S)
CREATE TABLE recommendations (
  id SERIAL PRIMARY KEY,
  rest_id VARCHAR(100),
  alias VARCHAR(100),
  name VARCHAR(100),
  image_url VARCHAR(200),
  yelp_url VARCHAR(250),
  rating INT,
  price VARCHAR(10),
  display_phone VARCHAR(15)
);
