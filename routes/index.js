const express = require("express");
const router = express.Router();

router.use("/api", require("./api"));

router.get("/", (req, res) => {
	res.render("index", {
		title: "Node JsonWebToken Auth"
	});
});

router.get("/register", (req, res) => {
	res.render("register", {
		title: "注册"
	});
});

router.get("/login", (req, res) => {
	res.render("login", {
		title: "登录"
	});
});

module.exports = router;
