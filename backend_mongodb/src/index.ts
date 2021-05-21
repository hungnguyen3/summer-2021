const express = require('express');
const app = express();
require('dotenv').config();

import db from '../db/database';

const port = 4000;

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
