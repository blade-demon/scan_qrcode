document.body.onload = function() {
	getUserInfo().then(user => {
		document.getElementById("userInfo").textContent = user.email;
	});
};

function getUserInfo() {
	const token = localStorage.getItem("token");
	const _id = localStorage.getItem("_id");
	return axios
		.get("/api/user/" + _id, {
			headers: {
				Authorization: token
			}
		})
		.then(response => {
			const { user } = response.data;
			return user;
		})
		.catch(e => {
			window.location.href = "/user/login";
		});
}
