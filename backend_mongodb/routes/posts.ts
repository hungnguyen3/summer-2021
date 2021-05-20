import express from 'express';

const router = express.Router();

// get all the posts
router.get('/', (req: any, res: any) => {
	res.send('We are on posts');
});

// get 1 post
router.get('/specific', (req: any, res: any) => {
	res.send('fetch a post');
});

// export router
module.exports = router;
