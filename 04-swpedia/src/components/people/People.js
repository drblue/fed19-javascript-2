import React from 'react';
import { usePaginatedQuery } from 'react-query';
import { useUrlSearchParams } from 'use-url-search-params';
import MoonLoader from 'react-spinners/MoonLoader';
import { getPeople } from '../../services/SWAPI';
import Person from './Person';

const People = () => {

	const [searchParams, setSearchParams] = useUrlSearchParams({ page: 1 }, { page: Number });
	const { resolvedData, latestData, isLoading, error } = usePaginatedQuery(['people', searchParams.page], getPeople);

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
			<h2>People</h2>
			<h3>Page {searchParams.page}</h3>

			<p>There are {resolvedData.count} people in the database.</p>

			<div className="d-flex mb-3 justify-content-between">
				<button
					onClick={() => setSearchParams({ ...searchParams, page: searchParams.page - 1 })}
					disabled={!latestData || !latestData.previous}
					className="btn btn-outline-secondary">Previous Page</button>

				<button
					onClick={() => setSearchParams({ ...searchParams, page: searchParams.page + 1 })}
					disabled={!latestData || !latestData.next}
					className="btn btn-outline-secondary">Next Page</button>
			</div>

			<div className="row">
				{resolvedData.results.map((person, index) => (
					<div className="col-lg-3 col-md-4 col-sm-6" key={index}>
						<Person person={person} />
					</div>
				))}
			</div>
		</>
	);
}

export default People;
