const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// Create connection
const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.env.PASSWORD,
	database: 'nodemysql',
});

// Connect
db.connect((err: any) => {
	if (err) {
		throw err;
	}
	console.log('MySql connected');
});

const app = express();

// Create DB
app.get('/createdb', (req: any, res: any) => {
	let sql = 'CREATE DATABASE nodemysql';
	db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send('Database created...');
	});
});

// Create table
app.get('/createpoststable', (req: any, res: any) => {
	let sql =
		'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), PRIMARY KEY(id))';
	db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send('Posts table created');
	});
});

app.listen('3000', () => {
	console.log('server started on port 3000');
});
