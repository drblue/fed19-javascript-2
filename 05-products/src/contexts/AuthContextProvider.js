import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const login = () => setIsAuthenticated(true);
	const logout = () => setIsAuthenticated(false);

	return (
		<AuthContext.Provider value={{ isAuthenticated, login, logout }}>
			{props.children}
		</AuthContext.Provider>
	);
}

export default AuthContextProvider;
