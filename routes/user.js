const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

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

router.get("/home", auth, (req, res) => {
	const { user } = req;
	if (!user) {
		return res.redirect("/user/login");
	}
	res.render("home", { user });
});

module.exports = router;
