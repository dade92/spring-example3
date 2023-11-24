CREATE SCHEMA IF NOT EXISTS `spring-example3`;
USE `spring-example3`;

DROP TABLE IF EXISTS TEST;
CREATE TABLE TEST
(
    ID int PRIMARY KEY AUTO_INCREMENT,
    testField varchar(255),
    anotherTestField varchar(255)
);