const mongoose = require('mongoose');

// schema describe the data
const PostSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	body: String,
});

module.exports = mongoose.model('Posts', PostSchema);
