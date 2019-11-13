import React from "react";
import io from "socket.io-client";
import { Layout } from "antd";
import LoginForm from "../LoginForm/LoginForm";
import QRCode from "qrcode";
import "./Login.css";

const { Header, Footer, Content } = Layout;

export default class Login extends React.Component {
	state = {
		QRData: ""
	};

	componentDidMount() {
		const socket = io("http://localhost:5000");
		socket.on("connect", function() {
			console.log("connect");
		});

		socket.on("qrcode", data => {
			this.generateQR(data);
		});
	}

	generateQR = async text => {
		try {
			let QRData = await QRCode.toDataURL(text);
			this.setState({
				QRData
			});
		} catch (err) {
			console.error(err);
		}
	};

	render() {
		return (
			<Layout>
				<Header>
					<div className='HeadLabel'>登录</div>
				</Header>
				<Content>
					<LoginForm />
					<div>扫描二维码登录</div>
					<img src={this.state.QRData} alt='二维码图片' />
				</Content>

				<Footer />
			</Layout>
		);
	}
}
