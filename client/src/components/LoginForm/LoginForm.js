import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import axios from "axios";
import "./LoginForm.css";

class NormalLoginForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				axios
					.post("/api/user/login", values)
					.then(res => {
						console.log(res.data);
					})
					.catch(e => {
						console.log(e.message);
					});
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='login-form'>
				<Form.Item>
					{getFieldDecorator("email", {
						rules: [{ required: true, message: "Please input your email!" }]
					})(
						<Input
							prefix={<Icon type='user' style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder='email'
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Please input your Password!" }]
					})(
						<Input
							prefix={<Icon type='lock' style={{ color: "rgba(0,0,0,.25)" }} />}
							type='password'
							placeholder='Password'
						/>
					)}
				</Form.Item>
				<Form.Item>
					<Button
						type='primary'
						htmlType='submit'
						className='login-form-button'>
						Log in
					</Button>
					Or <Link to='/register'>register now!</Link>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
	NormalLoginForm
);

export default WrappedNormalLoginForm;
