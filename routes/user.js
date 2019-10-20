const express = require("express");
const router = express.Router();

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

router.get("/home", (req, res) => {
	res.render("home");
});

module.exports = router;
