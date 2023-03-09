const express = require('express');
// Import and require mysql2 and express
const mysql = require('mysql2');

const inquirer = require('inquirer');
// const fs = require('fs');


const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        // MySQL username,
        user: 'root',
        port: 3306,
        // MySQL password
        password: '',
        database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
);

db.connect(err => {
    if (err) throw err
})

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

const questions = [
    {
        type: 'list',
        message: 'What would you like to do? (use arrow keys)',
        name: 'contact',
        choices: [
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'QUIT',
            'View All Employees',
        ],
    }];


// This writes the file and puts the data on the file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) =>
        err ? console.error(err) : console.log('Success!'))
}
// this function calls the questions/answers from inquirer
function init() {
    inquirer.prompt(questions)
        .then((answers) => {

            if (answers.contact === 'View All Departments') {
                viewDept()
            } else if (answers.contact === 'View All Roles') {
                viewRoles()
                
            } else if (answers.contact === 'View All Employees') {
                viewEmps()
            } else if (answers.contact === 'Add Department') {
                addDept()
            } else if (answers.contact === 'Add Role') {
                addRole()
            } else if (answers.contact === 'Update Employee Role') {
                updateRole()
            }
            function viewDept() {
                // SELECT * FROM department
                db.query('SELECT * FROM department', function (err, results) {
                    console.table(results);
                    if (err) console.err(err) 
                    
                    init();
                });
            }
            function viewRoles() {
                db.query('SELECT * FROM roles', function (err, results) {
                    console.table(results);
                    if (err) console.err(err)

                    init();
                });

            }
            function viewEmps() {
                db.query('SELECT * FROM employee', function (err, results) {
                    console.table(results);
                    if (err) console.err(err);
                    init();
                });
            }

        })
    function addDept() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'what is the name of the department?'
            }
        ])
            .then(answers => {
                db.query('INSERT INTO department(dept_name) VALUES ("' + answers.name + '")', function (err, results) {
                    console.table(results);
                    if (err) console.err(err);
                })
            })
    }
    function addRole() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the role?'
            },
            {
                type: 'input',
                name: 'dept_name',
                message: 'Which department are you putting this role into?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary for this role?'
            }
        ])
        .then(answers => {
            db.query(`INSERT INTO roles(job_title, role_dept, salary) VALUES ("${answers.name}", "${answers.dept_name}", "${answers.salary}" )`, function (err, results) {
                console.table(results);
                if(err) console.err(err);
                init();
            })
        })
    }
    function updateRole() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'role',
                message: 'Which employee are you updating',
                choices: [
                    'Captain Ahab',
                    'Quee Queg',
                    'Moby Dick',
                    'Ish Mael',
                    'R.J. MacReady',
                    'Ben Chang',
                    'Eren Yeager',
                    'Annie Edison',
                ]
            },
            {
                type: 'list',
                name: 'role',
                message: 'Which role do you want to assign the selected employee?',
                choices: [
                    'Engineering',
                    'Finance',
                    'Legal',
                    'Sales',
                    'Services',
                ]
            }
        ])
        .then(answers => {
            db.query(`UPDATE employee`)
            //! how to I write updates??
        })
    }
}


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

init();

        // Query database for the node server.js
        // todo Do i need to make one for each table/option: dept, role, employee?
        //! make them the return for switch case on the inquirer prompts 

