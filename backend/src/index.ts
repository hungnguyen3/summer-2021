const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
	host: 'summer2021',
	user: 'root',
	password: '123456',
});

// Connect
db.connect((err: any) => {
	if (err) {
		throw err;
	}
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
app.listen('3000', () => {
	console.log('server started on port 3000');
});
