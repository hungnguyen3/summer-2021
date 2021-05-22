const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');

import db from '../db/database';

const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Import routes
const postsRoute = require('../routes/posts');

// Use the middleware imported - Routes
app.use('/posts', postsRoute);

// start server
app.listen(port, () => console.log(`LISTENING on ${port}`));

// connect to db
db.once('open', () => {
	console.log('MongoDB Database connected!');
});
