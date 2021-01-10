USE sql_crm;

-- CREATE TABLE country (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     country VARCHAR(20)
-- );

-- CREATE TABLE owner (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     owner VARCHAR(30)
-- );

-- CREATE TABLE email_type (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     email_type VARCHAR(1)
-- );

-- CREATE TABLE client (
--     id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
--     first VARCHAR(20),
--     last VARCHAR(30),
--     email VARCHAR(50),
--     sold BOOLEAN,
--     date VARCHAR(50),
--     email_type_id INT,
--     owner_id INT,
--     country_id INT,

--     FOREIGN KEY(email_type_id) REFERENCES email_type(id),
--     FOREIGN KEY(owner_id) REFERENCES owner(id),
--     FOREIGN KEY(country_id) REFERENCES country(id)
-- );