import React, { useState, useEffect } from "react";
import axios from "axios";
import history from "../../history";

export default function Home() {
	const [userInfo, setUserInfo] = useState({ userInfo: "" });

	const fetchUserData = async () => {
		const token = window.localStorage.getItem("token");
		const userId = window.localStorage.getItem("_id");
		const response = await axios.get(`/api/user/${userId}`, {
			headers: { Authorization: token }
		});
		setUserInfo(response.data.user);
	};

	const logout = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("_id");
		history.push("/login");
	};

	useEffect(() => {
		fetchUserData();
	}, []);

	return (
		<div>
			<div>用户信息：</div>
			<div>{userInfo.email}</div>
			<div>{userInfo.age}</div>
			<div>
				<button onClick={() => logout()}>退出登录</button>
			</div>
		</div>
	);
}
