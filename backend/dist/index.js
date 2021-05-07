"use strict";
var express = require('express');
var mysql = require('mysql');
// Create connection
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
});
// Connect
db.connect(function (err) {
    if (err) {
        throw err;
    }
});
var app = express();
// Create DB
app.get('/createdb', function (req, res) {
    var sql = 'CREATE DATABASE nodemysql';
    db.query(sql, function (err, result) {
        if (err)
            throw err;
        console.log(result);
        res.send('Database created...');
    });
});
app.listen('3000', function () {
    console.log('server started on port 3000');
});
