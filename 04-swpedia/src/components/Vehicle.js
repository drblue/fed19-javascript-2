import React from 'react';

const Vehicle = ({ vehicle }) => {
	return (
		<>
			<h5 className="mb-2">{vehicle.name}</h5>
			<p className="mb-1"><strong>Model:</strong> {vehicle.model}</p>
			<p className="mb-1"><strong>Manufacturer:</strong> {vehicle.manufacturer}</p>
			<p className="mb-1"><strong>Cost:</strong> {vehicle.cost_in_credits} Galactic Credits</p>
			<p className="mb-1"><strong>Length:</strong> {vehicle.length} meters</p>
			<p className="mb-1"><strong>Number of crew needed:</strong> {vehicle.crew}</p>
			<p className="mb-1"><strong>Passengers:</strong> {vehicle.passengers}</p>
			<p className="mb-1"><strong>Cargo capacity:</strong> {vehicle.cargo_capacity} kg</p>
		</>
	);
}

export default Vehicle;
