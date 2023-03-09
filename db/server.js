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
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: '',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
  );

  
  
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
                // needs to respond to specific answers and potentially call more prompts/inputs for the add role,dept, and employee options.
                //! then it will call specific parts of schema or other sql file to update or show requested data
                // todo should i make seperate files to store each option of show and one to update files? if so be sure to require and export module
                
                if (answers.choices === 'View All Departments') {
                    viewDept()
                }
                function viewDept() {
                    // SELECT * FROM department
                }
                
            })
            .then(() => {
                console.log('we done it yo!');
            }) 
            .catch((error) => {
                console.log(error);
                console.log("wrong dummy");
            });
        }
        
        
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
        
        init();
        
        // Query database for the node server.js
        // todo Do i need to make one for each table/option: dept, role, employee?
        //! make them the return for switch case on the inquirer prompts 
        db.query('SELECT * FROM department', function (err, results) {
            if (err) console.err(err)
            else {
                if (results.length > 0) {
                    console.log(results);
                } else {
                    res(200, 'no results you dumb bastard');
                }
            }
          });
        db.query('SELECT * FROM employee', function (err, results) {
          });
        db.query('SELECT * FROM roles', function (err, results) {
          });