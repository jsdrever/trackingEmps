INSERT INTO department (id, dept_name)
 VALUES (2, "Engineering"),
        (3, "Finance"),
        (4, "Legal"),
        (1, "Sales");

INSERT INTO employee (emp_id, first_name, last_name, job_title, role_dept, salary, manager)
VALUES  (1, "Captain", "Ahab", "Sales Lead", "Sales", "100000", "null" ),
        (2, "Quee", "Queg", "Sales Person", "Sales", "80000", "Captain Ahab" ),
        (3, "Moby", "Dick", "Lead Engineer", "Engineering", "150000", "null" ),
        (4, "Ish", "Mael", "Software Engineer", "Engineering", "120000", "Moby Dick" ),
        (5, "R.J.", "MacReady", "Account Manager", "Finance", "160000", "null" ),
        (6, "Ben", "Chang", "Acountant", "Finance", "125000", "null" ),
        (7, "Eren", "Yaeger", "Legal Team Lead", "Legal", "250000", "null" ),
        (8, "Annie", "Edison", "Lawyer", "Legal", "190000", "Eren Yeager" );


INSERT INTO roles (role_id, job_title, role_dept, salary)
VALUES  (1, "Sales Lead", "Sales", "100000"),
        (2, "Sales Person", "Sales", "80000"),
        (3, "Lead Engineer", "Engineering", "150000"),
        (4, "Software Engineer", "Engineering", "120000"),
        (5, "Account Manager", "Finance", "160000"),
        (6, "Acountant", "Finance", "125000"),
        (7, "Legal Team Lead", "Legal", "250000"),
        (8, "Lawyer", "Legal", "190000");
     