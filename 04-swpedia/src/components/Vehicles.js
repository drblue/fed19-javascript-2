import React, { useState } from 'react';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getVehicles } from '../services/SWAPI';
import Vehicle from './Vehicle';

const Vehicles = () => {

	const [page, setPage] = useState(1);
	const { data, isLoading, error } = useQuery(['vehicles', page], getVehicles);

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
			<h3>Page {page}</h3>

			<p>There are {data.count} vehicles in the database.</p>

			<div className="d-flex mb-3 justify-content-center">
				<button onClick={() => setPage(1)} className="btn btn-outline-secondary">Page 1</button>
				<button onClick={() => setPage(2)} className="btn btn-outline-secondary">Page 2</button>
				<button onClick={() => setPage(3)} className="btn btn-outline-secondary">Page 3</button>
			</div>

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
