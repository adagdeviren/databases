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



// retrieve all employees and managers
app.get("/joinManager", (req, res) => {

    let sql =
        `SELECT employee_1.*,
        employee_2.manager AS "manager_no", employee_2.full_name AS "Manager_name"
        FROM employees employee_1 LEFT JOIN employees employee_2 ON employee_1.manager = employee_2.emp_no`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("managers joined to table");
    });
});


// retrieve all employees with department title
app.get("/joinDeptsTitle", (req, res) => {

    let sql =
        ` SELECT employees.*, departments.dept_no, departments.title FROM departments
        LEFT JOIN employees ON employees.dept_id = departments.dept_no`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("departments title joined to table");
    });
});



app.listen('3000', () => {
    console.log('Server started on port 3000');

}); 