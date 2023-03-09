DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT,
    dept_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE roles (
    role_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    role_dept VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL
    
);

CREATE TABLE employee (
    emp_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title VARCHAR (30) NOT NULL,
    role_dept VARCHAR(30) NOT NULL,
    salary VARCHAR(30) NOT NULL,
    manager VARCHAR(30) NOT NULL
);