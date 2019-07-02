CREATE DATABASE dab;
USE dab;
CREATE TABLE users(
    id INT NOT NULL AUTO_INCREMENT,
	google_id varchar(255) COLLATE utf8mb4_unicode_ci,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    institute VARCHAR(255),
    designation VARCHAR(255),
    profile_picture LONGBLOB,
    phone_no VARCHAR(255),
	remember_token varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
	created_at timestamp NULL DEFAULT NULL,
	updated_at timestamp NULL DEFAULT NULL,
    PRIMARY KEY(id),
    UNIQUE KEY(email)
);
CREATE TABLE statuses(
    id INT NOT NULL AUTO_INCREMENT,
    status VARCHAR(1000) NOT NULL,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id)
);
CREATE TABLE comments(
    id INT NOT NULL AUTO_INCREMENT,
    comment VARCHAR(1000) NOT NULL,
    date_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    status_id INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(user_id) REFERENCES users(id),
    FOREIGN KEY(status_id) REFERENCES statuses(id)
);
