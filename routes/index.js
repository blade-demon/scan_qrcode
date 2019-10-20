const express = require("express");
const router = express.Router();

router.use("/api", require("./api"));
router.use("/user", require("./user"));

router.get("/", (req, res) => {
	res.render("index", {
		title: "Node JsonWebToken Auth"
	});
});

module.exports = router;
