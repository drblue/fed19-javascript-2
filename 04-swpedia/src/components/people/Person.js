import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Person = ({ person }) => {
	const { getBgClass, getTextClass } = useContext(ThemeContext);
	const personId = getIdFromUrl(person.url);

	return (
		<div className={`card mb-3 ${getBgClass()} ${getTextClass()}`}>
			<div className="card-body">
				<h5 className="card-title mb-1"><Link to={`/people/${personId}`}>{person.name}</Link></h5>
			</div>

			<ul className="list-group list-group-flush">
				<li className={`list-group-item ${getBgClass()} ${getTextClass()}`}>Gender <strong>{person.gender}</strong></li>
				<li className={`list-group-item ${getBgClass()} ${getTextClass()}`}>Born <strong>{person.birth_year}</strong></li>
				<li className={`list-group-item ${getBgClass()} ${getTextClass()}`}>In <strong>{person.films.length}</strong> films</li>
			</ul>
		</div>
	);
}

export default Person;
