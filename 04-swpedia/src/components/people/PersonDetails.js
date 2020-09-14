import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getPerson } from '../../services/SWAPI';

const PersonDetails = () => {
	const navigate = useNavigate();
	const { personId } = useParams();
	const { data, isLoading, error } = useQuery(['person', personId], getPerson);

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
		<div className="card">
			<div className="card-header">
				<h2 className="card-title h5 mb-0">{data.name}</h2>
			</div>

			<div className="card-body">
				<dl className="row">
					<dt className="col-sm-3">Gender</dt>
					<dd className="col-sm-9">{data.gender}</dd>

					<dt className="col-sm-3">Birth year</dt>
					<dd className="col-sm-9">{data.birth_year}</dd>

					<dt className="col-sm-3">Height</dt>
					<dd className="col-sm-9">{data.height} cm</dd>

					<dt className="col-sm-3">Mass</dt>
					<dd className="col-sm-9">{data.mass} kg</dd>
				</dl>

				<button onClick={() => navigate(-1)} className="btn btn-secondary">&laquo; Back</button>
			</div>
		</div>
	);
}

export default PersonDetails;
