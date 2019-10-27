import React from "react";
import { Layout } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import "./Login.css";

const { Header, Footer, Content } = Layout;

export default class Login extends React.Component {
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
