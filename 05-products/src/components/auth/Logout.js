import React from 'react';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
	const { logout } = useAuth();

	return (
		<>
			<h1 className="mb-4">Log out...</h1>

			<div className="alert alert-warning">
				<p>Are you really sure you want to logout?</p>

				<button onClick={logout} className="btn btn-danger btn-lg">Yes, log me out!</button>
			</div>
		</>
	);
}

export default Logout;
