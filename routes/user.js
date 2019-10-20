const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
	res.render("register", {
		title: "??"
	});
});

router.get("/login", (req, res) => {
	res.render("login", {
		title: "??"
	});
});

router.get("/home", (req, res) => {
	res.render("home");
});

module.exports = router;
