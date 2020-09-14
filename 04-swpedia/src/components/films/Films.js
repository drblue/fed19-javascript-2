import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getFilms } from '../../services/SWAPI';
import Film from './Film';

const Films = () => {

	const [page, setPage] = useState(1);
	const { resolvedData, latestData, isLoading, error } = usePaginatedQuery(['films', page], getFilms);

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
			<h2>Films</h2>
			<h3>Page {page}</h3>

			<p>There are {resolvedData.count} films in the database.</p>

			<div className="d-flex mb-3 justify-content-between">
				<button
					onClick={() => setPage(prevPage => (!latestData || !latestData.previous)
							? prevPage
							: prevPage - 1)}
					disabled={!latestData || !latestData.previous}
					className="btn btn-outline-secondary">Previous Page</button>

				<button
					onClick={() => setPage(prevPage => (!latestData || !latestData.next)
						? prevPage
						: prevPage + 1)}
					disabled={!latestData || !latestData.next}
					className="btn btn-outline-secondary">Next Page</button>
			</div>

			<div className="row">
				{resolvedData.results.map((film, index) => (
					<div className="col-lg-3 col-md-4 col-sm-6" key={index}>
						<Film film={film} />
					</div>
				))}
			</div>
		</>
	);
}

export default Films;
