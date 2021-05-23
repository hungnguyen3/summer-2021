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
router.post('/createpost', (req: any, res: any) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description,
		body: req.body.body,
	});

	post
		.save()
		.then((data: any) => {
			res.json(data);
		})
		.catch((err: any) => {
			res.json({ message: err });
		});
});

// get a specific post
router.get('/getpost/:id', async (req: any, res: any) => {
	try {
		const post = await Post.findById(req.params.id);
		res.json(post);
	} catch (err: any) {
		res.json({ message: err });
	}
});

// delete a post by id
router.delete('/deletepost/:id', async (req: any, res: any) => {
	try {
		const removedPost = await Post.remove({ _id: req.params.id });
		res.json(removedPost);
	} catch (err: any) {
		res.json({ message: err });
	}
});

// export router
module.exports = router;
