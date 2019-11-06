var express = require("express");
var app = express();
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(
	"mongodb://localhost:27017/auth-login",
	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
	err => {
		if (err) {
			console.log(err);
		} else {
			console.log("MongoDB connected!");
		}
	}
);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});
app.use(require("./routes"));

if (process.env.NODE_ENV === "production") {
	// Express will serve up production assets like our main.js file or main.css file!
	app.use(express.static("client/build"));
	// Express will serve up index.html file if it doesn't recognize the route!
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, err => {
	if (!err) {
		/* eslint no-console: 0*/
		console.log(`Server is running on port: ${PORT}.`);
	} else {
		/* eslint no-console: 0*/
		console.log(`Failed to start the server: ${JSON.stringify(err)}`);
	}
});
