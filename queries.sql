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

UPDATE table_name
SET name = "name of the thing being updated"
SET job_title
SET role_dept
SET salary
WHERE id = 1;