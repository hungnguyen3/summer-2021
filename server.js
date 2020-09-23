var express = require("express");
var MongoClient = require("mongodb").MongoClient;

var app = express();

app.use(express.json());

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
	db = client.db("list");
	var server = app.listen(3000, function () {
		var port = server.address().port;
		console.log("listening at %s", port);
	});
});

app.post("/list", function (req, res) {
	db.collection("list").insertOne(
		{ task: req.body.task, info: req.body.info },
		(err, request) => {
			if (err) return console.log(err);
			res.send("saved");
		}
	);
});
