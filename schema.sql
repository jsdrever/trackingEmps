CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT NOT NULL,

    name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
    role_id INT NOT NULL,
    job_title VARCHAR(30) NOT NULL,
    role_dept VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    
);

CREATE TABLE employee (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role VARCHAR (30) NOT NULL,
    manager VARCHAR(30) NOT NULL
);