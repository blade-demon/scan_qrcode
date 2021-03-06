document.body.onload = function() {
	const registerBtn = document.getElementById("registerBtn");
	const emailInput = document.getElementById("emailInput");
	const passwordInput = document.getElementById("passwordInput");

	registerBtn.addEventListener("click", function() {
		const email = emailInput.value;
		const password = passwordInput.value;
		axios
			.post("/api/user/register", { email, password })
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
