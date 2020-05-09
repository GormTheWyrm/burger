DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;
CREATE TABLE burgers(
id int (10) NOT NUll auto_increment,
burger_name varchar(30),
devoured boolean,
PRIMARY KEY (id)
);