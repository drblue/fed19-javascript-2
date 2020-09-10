import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getVehicles } from '../services/SWAPI';
import Vehicle from './Vehicle';

const Vehicles = () => {

	const [page, setPage] = useState(1);
	const { resolvedData, latestData, isLoading, error } = usePaginatedQuery(['vehicles', page], getVehicles);

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

			<p>There are {resolvedData.count} vehicles in the database.</p>

			<div className="d-flex mb-3 justify-content-between">
				<button
					onClick={() => setPage(prevPage => {
						if (!latestData || !latestData.previous) {
							return prevPage;
						}
						return prevPage - 1;
					})}
					className="btn btn-outline-secondary">Previous Page</button>

				<button
					onClick={() => setPage(prevPage => {
						if (!latestData || !latestData.next) {
							return prevPage;
						}
						return prevPage + 1;
					})}
					className="btn btn-outline-secondary">Next Page</button>
			</div>

			<ul className="list-group">
				{resolvedData.results.map((vehicle, index) => (
					<li className="list-group-item" key={index}>
						<Vehicle vehicle={vehicle} />
					</li>
				))}
			</ul>
		</>
	);
}

export default Vehicles;
