# RAD GARDEN SERVER README

## ENV Requirements

- docker
- node
- postgresql
- keycloak

## DATABASE schemas

DROP TABLE IF EXISTS userTable;
DROP TABLE IF EXISTS garden;
DROP TABLE IF EXISTS plant;

CREATE TABLE IF NOT EXISTS userTable (
user_id serial PRIMARY KEY,
username VARCHAR (50) UNIQUE NOT NULL,
email VARCHAR (80) UNIQUE NOT NULL,
garden_id INT,
growing_zone VARCHAR,
member_since TIMESTAMP
);

CREATE TABLE IF NOT EXISTS garden (
garden_id serial PRIMARY KEY,
garden_name VARCHAR (100),
date_started DATE NOT NULL,
user_id INT NOT NULL,
zone_id INT NOT NULL,
zipcode_id INT NOT NULL
);

CREATE TABLE IF NOT EXISTS plant (
plant_id serial PRIMARY KEY,
common_name VARCHAR(255) NOT NULL,
sci_name VARCHAR(255) UNIQUE NOT NULL,
zone_id INT NOT NULL,
days_to_harvest VARCHAR(255),
life_cycle VARCHAR(255)
);

<!-- Test Data Queries and Experimental Tables Below -->

<!-- INSERT INTO userTable ( username, email, garden_id, growing_zone, member_since )
VALUES ('wrenb0t', 'wren100@mail.com', 1, '4b', '"2017-07-23", "13:10:11"' );

INSERT INTO userTable ( username, email, garden_id, growing_zone, member_since )
VALUES ('cardinalb0t', 'cardinal100@mail.com', 2, '6', '"2017-07-23", "13:10:11"' );

INSERT INTO userTable ( username, email, garden_id, growing_zone, member_since )
VALUES ('robinb0t', 'robin100@mail.com', 3, '3', '"2017-07-23", "13:10:11"' );

INSERT INTO garden ( garden_name, date_started, user_id, zone_id, zipcode_id )
VALUES ( 'wedge place', '10/31/2020', 1, 3, 1 );

INSERT INTO garden ( garden_name, date_started, user_id, zone_id, zipcode_id )
VALUES ( 'bancroft berry patch', '10/31/2020', 2, 6, 1 );

INSERT INTO garden ( garden_name, date_started, user_id, zone_id, zipcode_id )
VALUES ( 'northrup new growth', '10/31/1988', 4, 8, 2 );

INSERT INTO plant ( common_name, sci_name, zone_id, days_to_harvest, life_cycle )
VALUES ( 'hosta', 'science hosta', 4, 8, 'perennial' );

INSERT INTO plant ( common_name, sci_name, zone_id, days_to_harvest, life_cycle )
VALUES ( 'kale', 'science kale', 8, 90, 'annual' );

INSERT INTO plant ( common_name, sci_name, zone_id, days_to_harvest, life_cycle )
VALUES ( 'lilac', 'science-y name', 8, 100, 'perennial' ); -->
