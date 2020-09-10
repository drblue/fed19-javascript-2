import React from 'react';
import { useQuery } from 'react-query';
import { getPlanets } from '../services/SWAPI';
import MoonLoader from 'react-spinners/MoonLoader';

const Planets = () => {

	const { data, isLoading, error } = useQuery(['planets', 1], getPlanets);

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
			<h2>Planets</h2>

			<p>There are {data.count} planets in the database.</p>

			<ul className="list-group">
				{data.results.map((planet, index) => (
					<li className="list-group-item" key={index}>
						<h5 className="mb-1">{planet.name}</h5>
						<p className="mb-1"><strong>Population:</strong> {planet.population}</p>
						<p className="mb-1"><strong>Climate:</strong> {planet.climate}</p>
					</li>
				))}
			</ul>
		</>
	);
}

export default Planets;
