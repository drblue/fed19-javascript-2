import React from 'react';
import useAuth from '../../hooks/useAuth';

const Login = () => {
	const { isAuthenticated, login, logout } = useAuth();

	return (
		<>
			<h1 className="mb-4">Login</h1>

			<p>Here should a login form be (some time in the future). Right now we'll settle for a button ;P.</p>

			<button onClick={login} className="btn btn-success btn-lg">Log in already!</button>
		</>
	);
}

export default Login;
