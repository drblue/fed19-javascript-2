import React from 'react';
import BB8_Bobbing from '../assets/images/bb8-bobbing.gif';

const Home = () => {
	return (
		<div className="text-center mt-5">
			<img src={BB8_Bobbing} className="mb-4" alt="BB-8 bobbing" />
			<h1 className="mb-2">Welcome</h1>
			<p>Choose your destination in the navigation above</p>
		</div>
	);
}

export default Home;
