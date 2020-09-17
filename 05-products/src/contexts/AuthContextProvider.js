import React, { createContext, useState } from 'react';
import { login as apiLogin } from '../services/ShopAPI';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [error, setError] = useState(false);
	const [user, setUser] = useState(false);
	const isAuthenticated = () => user ? true : false;

	const login = async (username, password) => {
		setError(false);
		console.log("want to login with:", username, password);

		// make async request to API's login endpoint
		// and send along username and password
		const loginResult = await apiLogin(username, password);
		console.log("loginResult:", loginResult);

		// check if authentication request was successful
		// and update `user` variable with the response
		if (!loginResult) {
			setUser(false);
			setError("Invalid username/password");
			return false;
		}

		setUser(loginResult);
		setError(false);
		return true;
	}

	const logout = () => setUser(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout, error }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
