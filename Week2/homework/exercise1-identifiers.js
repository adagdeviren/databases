'use strict'

const express = require('express');
const mysql = require('mysql');
const data = require('./data.js')
const app = express();


// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

// Create a DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS company2';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database company2 has created..');

    });
    
});
 // selecting database.
app.get("/usedb", (req, res) => {
    let sql = "USE company2";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send(" database company2 is selected");
    });
  });

// Creating employees table
app.get("/createemployeestable", (req, res) => {
        
    let sql =
        "CREATE TABLE IF NOT EXISTS employees(emp_no INT PRIMARY KEY AUTO_INCREMENT, full_name VARCHAR(50),  salary INT, manager INT, dept_id INT, address VARCHAR(50), FOREIGN KEY(manager) REFERENCES employees(emp_no))";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("employees table created");
    });
});

// Inserting values to employees table
app.get("/addemployees", (req, res) => {
    data.employees.forEach(employee => {
        let sql = "INSERT INTO employees SET?";
        db.query(sql, employee, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send("Employees inserted");
});


app.listen('3000', () => {
    console.log('Server started on port 3000');

}); 