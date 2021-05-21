import express from 'express';
const router = express.Router();
const Post = require('../models/Post');

// get all the posts
router.get('/', (req: any, res: any) => {
	res.send('We are on posts');
});

// get 1 post
router.get('/specific', (req: any, res: any) => {
	res.send('fetch a post');
});

// create a post
router.post('/', (req: any, res: any) => {
	console.log(req.body);
});

// export router
module.exports = router;
