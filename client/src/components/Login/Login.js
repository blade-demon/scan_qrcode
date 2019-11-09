import React from "react";
import io from "socket.io-client";
import { Layout } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

const { Header, Footer, Content } = Layout;

export default class Login extends React.Component {
	componentDidMount() {
		const socket = io("http://localhost:5000");
		socket.on("connect", function() {
			console.log("connect");
		});
	}

	render() {
		return (
			<Layout>
				<Header>
					<div className='HeadLabel'>登录</div>
				</Header>
				<Content>
					<LoginForm />
				</Content>
				<Footer />
			</Layout>
		);
	}
}
