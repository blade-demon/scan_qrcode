import React from "react";
import { Link } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";
import history from "../../history";
import axios from "axios";
import "./RegisterForm.css";

class NormalRegisterForm extends React.Component {
	handleSubmit = e => {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				console.log("Received values of form: ", values);
				axios
					.post("/api/user/register", values)
					.then(res => history.push("/home"))
					.catch(e => console.log(e));
			}
		});
	};

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit} className='register-form'>
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
						className='register-form-button'>
						Register
					</Button>
					Or <Link to='/login'>login now!</Link>
				</Form.Item>
			</Form>
		);
	}
}

const WrappedNormalRegisterForm = Form.create({ name: "normal_register" })(
	NormalRegisterForm
);

export default WrappedNormalRegisterForm;
