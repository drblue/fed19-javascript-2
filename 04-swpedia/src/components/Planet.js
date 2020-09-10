import React from 'react';

const Planet = ({ planet }) => {
	return (
		<>
			<h5 className="mb-1">{planet.name}</h5>
			<p className="mb-1"><strong>Population:</strong> {planet.population}</p>
			<p className="mb-1"><strong>Climate:</strong> {planet.climate}</p>
		</>
	);
}

export default Planet;
