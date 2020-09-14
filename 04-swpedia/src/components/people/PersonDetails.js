import React from 'react';
import { useParams } from 'react-router-dom';

const PersonDetails = () => {
	const { personId } = useParams();

	return (
		<>
			<h1>Person {personId}'s name</h1>
			<h2>Some info</h2>
		</>
	);
}

export default PersonDetails;
