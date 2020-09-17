import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Logout = () => {
	const navigate = useNavigate();
	const { logout } = useAuth();

	return (
		<>
			<h1 className="mb-4">Log out...</h1>

			<div className="alert alert-warning">
				<p>Are you really sure you want to logout?</p>

				<button onClick={() => {
					logout();
					navigate('/');
				}} className="btn btn-danger btn-lg">Yes, log me out!</button>
			</div>
		</>
	);
}

export default Logout;
