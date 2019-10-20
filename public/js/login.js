document.body.onload = function() {
	const loginBtn = document.getElementById("loginBtn");
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");

	loginBtn.addEventListener("click", function(e) {
		const email = emailInput.value;
		const password = passwordInput.value;
		console.log("do login");
		axios
			.post("/api/user/login", { email, password })
			.then(res => {
				const { token, user } = res.data;
				if (token) {
					localStorage.setItem("token", "Bearer " + token);
					localStorage.setItem("_id", user._id);
					window.location.href = "/user/home";
				}
			})
			.catch(e => console.log("登录失败！"));
	});
};
