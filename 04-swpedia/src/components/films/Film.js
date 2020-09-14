import React from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers';

const Film = ({ film }) => {
	const filmId = getIdFromUrl(film.url);

	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title mb-1"><Link to={`/films/${filmId}`}>{film.title}</Link></h5>
			</div>

			<ul className="list-group list-group-flush">
				<li className="list-group-item">Episode <strong>{film.episode_id}</strong></li>
				<li className="list-group-item">Released <strong>{film.release_date}</strong></li>
				<li className="list-group-item"><strong>{film.characters.length}</strong> characters</li>
			</ul>
		</div>
	);
}

export default Film;
