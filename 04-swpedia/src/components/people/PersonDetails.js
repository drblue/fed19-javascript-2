import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getPerson } from '../../services/SWAPI';
import { getIdFromUrl } from '../../helpers';

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

	const homeworld_id = getIdFromUrl(data.homeworld);

	return (
		<div className="card">
			<div className="card-header">
				<h1 className="card-title h5 mb-0">{data.name}</h1>
			</div>

			<div className="card-body">
				<h2 className="h4">Attributes</h2>
				<dl className="row">
					<dt className="col-sm-3">Gender</dt>
					<dd className="col-sm-9">{data.gender}</dd>

					<dt className="col-sm-3">Birth year</dt>
					<dd className="col-sm-9">{data.birth_year}</dd>

					<dt className="col-sm-3">Height</dt>
					<dd className="col-sm-9">{data.height} cm</dd>

					<dt className="col-sm-3">Mass</dt>
					<dd className="col-sm-9">{data.mass} kg</dd>

					<dt className="col-sm-3">Hair color</dt>
					<dd className="col-sm-9">{data.hair_color}</dd>

					<dt className="col-sm-3">Skin color</dt>
					<dd className="col-sm-9">{data.skin_color}</dd>

					<dt className="col-sm-3">Eye color</dt>
					<dd className="col-sm-9">{data.eye_color}</dd>
				</dl>

				<h2 className="h4">Links</h2>
				<dl className="row">
					<dt className="col-sm-3">Homeworld</dt>
					<dd className="col-sm-9">
						<Link to={`/planets/${homeworld_id}`}>Planet {homeworld_id} &raquo;</Link>
					</dd>

					<dt className="col-sm-3">Films</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{data.films.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/films/${id}`}>Film {id} &raquo;</Link>
									</li>
								)
							})}
						</ul>
					</dd>

					<dt className="col-sm-3">Starships</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{data.starships.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/starships/${id}`}>Starship {id} &raquo;</Link>
									</li>
								)
							})}
						</ul>
					</dd>
				</dl>

				<button onClick={() => navigate(-1)} className="btn btn-secondary">&laquo; Back</button>
			</div>
		</div>
	);
}

export default PersonDetails;
