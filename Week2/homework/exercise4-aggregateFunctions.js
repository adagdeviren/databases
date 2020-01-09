'use strict';

const express = require('express');
const mysql = require('mysql');
const data = require('./data.js')
const app = express();


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company2'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// Aggregate Functions
function executeQuery(sql) {
    db.query(sql, (error, result) => {
      if (error) throw error;
      console.log(result);
    });
  }

// 1-Retrieve All department numbers and the number of employees working there.
  executeQuery('SELECT dept_no, departments.title, COUNT(emp_no) AS "Number_of_employees" FROM departments LEFT JOIN employees ON employees.dept_id = departments.dept_no GROUP BY  dept_no;');

// 2-Sum of the salaries of all employees.
executeQuery('SELECT SUM(salary) AS "Sum_of_the_salaries_of_all_employees" FROM employees;');

// 3-Average of the salaries of all employees.
executeQuery('SELECT AVG(salary) AS "Average_of_the_salaries_of_all_employees" FROM employees;');

// 4-Sum of the salaries of the employees per department.
executeQuery('SELECT employees.dept_id, departments.title, SUM(salary) FROM employees JOIN departments ON employees.dept_id = departments.dept_no GROUP BY dept_id ORDER BY dept_id;');

// 5-Minimum and maximum of the salaries per department.
executeQuery('SELECT dept_id, MIN(salary),MAX(salary) FROM employees GROUP BY dept_id;');

// 6-For each salary value, return the number of employees paid.
executeQuery('SELECT salary, COUNT(*) AS "employees_paid" FROM employees GROUP BY salary;');



app.listen('3000', () => {
    console.log('Server started on port 3000');

}); 