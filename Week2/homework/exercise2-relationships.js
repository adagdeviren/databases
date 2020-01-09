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


// Creating departments table
app.get("/createdepartmentstable", (req, res) => {
        
    let sql =
        `CREATE TABLE IF NOT EXISTS departments(dept_no INT PRIMARY KEY , title VARCHAR(50), description VARCHAR(50), address INT)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("departments table created");
    });
});

// Inserting values to departments table
app.get("/addepartments", (req, res) => {
    data.departments.forEach(department => {
        let sql = "INSERT INTO departments SET?";
        db.query(sql, department, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send("Departments inserted");
});

// adding Foreign key.
app.get("/addforeignkeytodepts", (req, res) => {
        
    let sql =
        ` ALTER TABLE employees ADD Constraint FOREIGN KEY(dept_id) REFERENCES departments(dept_no)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("foreign key added to departments table");
    });
});



app.listen('3000', () => {
    console.log('Server started on port 3000');

}); 