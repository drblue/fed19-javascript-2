import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getFilm } from '../../services/SWAPI';
import { getIdFromUrl } from '../../helpers';

const FilmDetails = () => {
	const navigate = useNavigate();
	const { filmId } = useParams();
	const { data, isLoading, error } = useQuery(['film', filmId], getFilm);

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
				<h1 className="card-title h5 mb-0">{data.title}</h1>
			</div>

			<div className="card-body">
				<p className="card-text">{data.opening_crawl}</p>

				<h2 className="h4">Attributes</h2>
				<dl className="row">
					<dt className="col-sm-3">Episode</dt>
					<dd className="col-sm-9">{data.episode_id}</dd>

					<dt className="col-sm-3">Director</dt>
					<dd className="col-sm-9">{data.director}</dd>

					<dt className="col-sm-3">Producer</dt>
					<dd className="col-sm-9">{data.producer}</dd>

					<dt className="col-sm-3">Release date</dt>
					<dd className="col-sm-9">{data.release_date}</dd>
				</dl>

				<h2 className="h4">Links</h2>
				<dl className="row">
					<dt className="col-sm-3">Characters</dt>
					<dd className="col-sm-9">
						<ul className="list-group">
							{data.characters.map(url => {
								const id = getIdFromUrl(url);
								return (
									<li className="list-group-item" key={id}>
										<Link to={`/people/${id}`}>Character {id} &raquo;</Link>
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

export default FilmDetails;
