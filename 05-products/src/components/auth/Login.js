import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const initialState = {
	username: "",
	password: ""
}

const Login = () => {
	const navigate = useNavigate();
	const [input, setInput] = useState(initialState)
	const { isAuthenticated, login, logout, error } = useAuth();

	const handleInputChange = (e) => {
		setInput({
			...input,
			[e.target.id]: e.target.value
		});
	}

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		if (await login(input.username, input.password)) {
			navigate('/');
		}
	}

	return (
		<>
			<h1 className="mb-4">Login</h1>

			{error && (
				<div className="alert alert-warning">
					{error}
				</div>
			)}

			<form onSubmit={handleFormSubmit}>
				<div className="form-group">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						onChange={handleInputChange}
						value={input.username}
						className="form-control"
						placeholder="Enter your username" />
				</div>

				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						onChange={handleInputChange}
						value={input.password}
						className="form-control"
						placeholder="Give us your password" />
				</div>

				<button type="submit" className="btn btn-success btn-lg">Log in already!</button>
			</form>

		</>
	);
}

export default Login;
