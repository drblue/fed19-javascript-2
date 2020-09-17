import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const AuthRoute = (props) => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated()) {
		return (<Navigate to="/login" state={{ accessDenied: true }} />);
	}

	return (
		<Route {...props} />
	);
}

export default AuthRoute;
