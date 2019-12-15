'use strict'

const express = require('express');
const mysql = require('mysql');
const data = require('./data.js')

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'company'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();

// Create a DB
app.get('/createdb', (req, res) => {
    let sql = 'CREATE DATABASE IF NOT EXISTS company';
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Database created..');

    });

    db.changeUser({ database: 'company' }, function (err) {
        if (err) throw err;
    });
});

// Create tables
// Employees table
app.get('/createemployeestable', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS employees(emp_no INT, emp_name VARCHAR(50), 
    salary INT, reports_to INT )`; // for 'reports_to' field : I tried 'VARCHAR' type to give managers a name, but gave me an error??
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('employees table created..');
    });
});

// Departments Table
app.get('/createdepartmentstable', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS departments(dept_no INT, dept_name VARCHAR(50), manager VARCHAR(50) )`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('departments table created..');
    });
});

// Projects Table
app.get('/createprojectstable', (req, res) => {
    let sql = `CREATE TABLE IF NOT EXISTS projects(proj_no INT PRIMARY KEY AUTO_INCREMENT, proj_name VARCHAR(50), 
    starting_date DATE NOT NULL, ending_date DATE NOT NULL)`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('projects table created..');
    });
});


// Inserting Values to tables

// EMPLOYEES
app.get("/addemployees", (req, res) => {
    data.employees.forEach(employee => {
        let sql = "INSERT INTO employees SET ?";
        let query = db.query(sql, employee, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send("Employees added..");
});

// DEPARTMENTS
app.get("/adddepartments", (req, res) => {
    data.departments.forEach(department => {
        let sql = "INSERT INTO departments SET ?";
        let query = db.query(sql, department, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send("Departments added..");
});

// PROJECTS
app.get("/addprojects", (req, res) => {
    data.projects.forEach(project => {
        let sql = "INSERT INTO projects SET ?";
        let query = db.query(sql, project, (err, result) => {
            if (err) throw err;
            console.log(result);
        });
    });
    res.send("Projects added..");
});


app.listen('3000', () => {
    console.log('Server started on port 3000');

});