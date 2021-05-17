const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

app.listen(4000, () => console.log('server started'));
