import React from "react";
import { Layout } from "antd";
import RegisterForm from "../RegisterForm/RegisterForm";
import "./Register.css";

const { Header, Footer, Content } = Layout;

export default class Register extends React.Component {
	render() {
		return (
			<Layout>
				<Header>
					<div className='HeadLabel'>注册</div>
				</Header>
				<Content>
					<RegisterForm />
				</Content>
				<Footer />
			</Layout>
		);
	}
}
