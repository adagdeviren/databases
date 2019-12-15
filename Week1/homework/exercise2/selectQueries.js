'use strict'

const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    database: 'new_world'
});

// Connect
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();


// names of countries with population greater than 8 million
app.get("/getcountries-over-8m", (req, res) => {
    let sql = `SELECT Name,Population FROM country WHERE Population >= '8000000'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/getcountry-names-with-land", (req, res) => {
    let sql = `SELECT Name FROM country WHERE Name LIKE '%land%'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/getcountries0.5-1m", (req, res) => {
    let sql = `SELECT Name FROM city WHERE Population BETWEEN '500000' AND '1000000'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/get-eurocities", (req, res) => {
    let sql = `SELECT Name FROM country WHERE Continent = 'Europe'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/getcountries-by-surface-area", (req, res) => {
    let sql = `SELECT Name, SurfaceArea FROM country ORDER BY SurfaceArea DESC`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/getcities-of-nl", (req, res) => {
    let sql = `SELECT Name FROM city WHERE CountryCode = 'NLD'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/get-rotterdam-population", (req, res) => {
    let sql = `SELECT Name, Population FROM city WHERE Name = 'Rotterdam'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/get-biggest-10-countries", (req, res) => {
    let sql = `SELECT Name FROM country ORDER BY SurfaceArea DESC LIMIT 10`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.get("/get-world-population", (req, res) => {
    let sql = `SELECT SUM(Population) FROM country`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send(result);
    });
});


app.listen('3000', () => {
    console.log('Server started on port 3000');
});