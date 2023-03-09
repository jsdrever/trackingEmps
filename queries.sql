SELECT * 
FROM department;

INSERT INTO department (id, dept_name)
    VALUES (${}, ${});

SELECT *
FROM employee; 

INSERT INTO employee (emp_id, first_name, last_name, job_title, role_dept, salary, manager)
    VALUES (${}, ${}, ${}, ${}, ${}, ${}, ${});

SELECT * 
FROM roles;

INSERT INTO roles (role_id, job_title, role_dept, salary)
VALUES  (${}, ${}, ${}, ${}),