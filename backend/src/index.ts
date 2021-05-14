const express = require('express');
const mysql = require('mysql');
require('dotenv').config();
var bodyParser = require('body-parser');

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

app.listen('3000', () => {
	console.log('server started on port 3000');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

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
app.post('/createtable', (req: any, res: any) => {
	console.log(req.body.table_name);
	let sql = `CREATE TABLE ${req.body.table_name}(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))`;
	console.log(sql);
	db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send(`${req.body.table_name} table created`);
	});
});

// Delete table
app.delete('/droptable', (req: any, res: any) => {
	let sql = `DROP TABLE ${req.body.table_name}`;
	db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send(`${req.body.table_name} table deleted`);
	});
});

// Insert post
app.post('/addpost', (req: any, res: any) => {
	console.log(req);
	let post = { id: req.body.id, title: req.body.title, body: req.body.body };
	let sql = 'INSERT INTO posts SET?';
	let query = db.query(sql, post, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send('post added');
	});
});

// Select post
app.get('/getposts', (req: any, res: any) => {
	let sql = 'SELECT * FROM posts';
	let query = db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send('posts fetched');
	});
});

// Update a row
app.post('/updatepost', (req: any, res: any) => {
	let sql = "UPDATE posts SET title = 'hello', body = 'world' WHERE id = 1";
	let query = db.query(sql, (err: any, result: any) => {
		if (err) throw err;
		console.log(result);
		res.send('row updated');
	});
});
