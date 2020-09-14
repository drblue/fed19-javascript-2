import React from 'react';
import StormTrooperSad from '../assets/images/StormTrooperSad.gif';

const NotFound = () => {
	return (
		<div className="text-center mt-5">
			<img src={StormTrooperSad} className="mb-4" alt="A sad Storm Trooper" />
			<h1 className="mb-2">Sorryyyyy....</h1>
			<p>That page is missing, just like most Storm Troopers</p>
		</div>
	);
}

export default NotFound;
