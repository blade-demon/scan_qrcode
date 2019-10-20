var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(
	"mongodb://lufax:lufax2019@ds137488.mlab.com:37488/auth-login",
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
app.use(express.static(path.join(__dirname, "public")));
app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(require("./routes"));
app.listen(3000, () => console.log("Server running on http://localhost:3000/"));
