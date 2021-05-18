const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

app.listen(4000, () => console.log('server started'));

mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// check connection
const db = mongoose.connection;
db.once('open', (err: any) => {
	console.log('MongoDB Database connected!');
});

db.on('error', (err: any) => {
	console.error('connection error:', err);
});
