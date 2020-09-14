import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState('light');
	const isThemeLight = () => theme === 'light';
	const isThemeDark = () => theme === 'dark';
	const getActiveTheme = () => theme;
	const getBgClass = () => theme === 'light' ? 'bg-light' : 'bg-dark';
	const getTextClass = () => theme === 'light' ? 'text-body' : 'text-white';
	const setDarkTheme = () => setTheme('dark');
	const setLightTheme = () => setTheme('light');
	const toggleTheme = () => isThemeLight() ? setDarkTheme() : setLightTheme();

	return (
		<ThemeContext.Provider value={{
			getActiveTheme,
			getBgClass,
			getTextClass,
			isThemeDark,
			isThemeLight,
			setDarkTheme,
			setLightTheme,
			toggleTheme
		}}>
			{props.children}
		</ThemeContext.Provider>
	);
}

export default ThemeContextProvider;
