import React, { useContext } from 'react';
import BB8_Bobbing from '../assets/images/bb8-bobbing.gif';
import { ThemeContext } from '../contexts/ThemeContextProvider';

const Home = () => {
	const { getActiveTheme, getBgClass, getTextClass, toggleTheme } = useContext(ThemeContext);

	return (
		// <div className="text-center mt-5">
		<div className={`text-center mt-5 ${getBgClass()} ${getTextClass()}`}>
			<img src={BB8_Bobbing} className="mb-4" alt="BB-8 bobbing" />
			<h1 className="mb-2">Welcome</h1>
			<p>Choose your destination in the navigation above</p>

			<p><em>It seems you have chosen the <strong>{getActiveTheme()}</strong> side</em></p>
			<button onClick={() => toggleTheme()} className="btn btn-danger btn-sm">Switch sides</button>
		</div>
	);
}

export default Home;
