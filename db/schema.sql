CREATE DATABASE burgers2_db;
USE burgers2_db;

CREATE TABLE `burgers` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `burger_name` VARCHAR( 255) NOT NULL,
  `devoured` BOOLEAN DEFAULT false,

  PRIMARY KEY ( `id` ) 
);