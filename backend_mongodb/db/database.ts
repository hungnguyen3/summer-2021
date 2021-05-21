const mongoose = require('mongoose');

void mongoose.connect(process.env.MONGO_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

export default mongoose.connection;
