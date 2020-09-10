import React from 'react';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getVehicles } from '../services/SWAPI';
import Vehicle from './Vehicle';

const Vehicles = () => {

	const { data, isLoading, error } = useQuery(['vehicles', 1], getVehicles);

	if (isLoading) {
		return (
			<MoonLoader color={"#F8D41C"} size={50} />
		);
	}

	if (error) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, the unlikely event happend and a Stormtrooper actually hit something...</h2>
				<p><strong>Error message:</strong> {error.message}</p>
			</div>
		)
	}

	return (
		<>
			<h2>Vehicles</h2>

			<p>There are {data.count} vehicles in the database.</p>

			<ul className="list-group">
				{data.results.map((vehicle, index) => (
					<li className="list-group-item" key={index}>
						<Vehicle vehicle={vehicle} />
					</li>
				))}
			</ul>
		</>
	);
}

export default Vehicles;
