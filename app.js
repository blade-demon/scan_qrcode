var express = require("express");
var app = express();
var path = require("path");
var cookieParser = require("cookie-parser");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var session = require("express-session");

//Configure mongoose's promise to global promise
mongoose.promise = global.Promise;
mongoose.connect(
	"mongodb://dbuser:lufax2019@ds149146.mlab.com:49146/scanqr-login",
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
app.use(
	session({
		secret: "passport",
		cookie: { maxAge: 60000 },
		saveUninitialized: false
	})
);

app.set("views", __dirname + "/views");
app.set("view engine", "pug");
app.use(require("./routes"));
app.listen(3000, () => console.log("Server running on http://localhost:3000/"));
