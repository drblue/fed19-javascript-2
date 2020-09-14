import React from 'react';

const Person = ({ person }) => {
	return (
		<div className="card mb-3">
			<div className="card-body">
				<h5 className="card-title">{person.name}</h5>
			</div>

			<ul className="list-group list-group-flush">
				<li className="list-group-item">Gender <strong>{person.gender}</strong></li>
				<li className="list-group-item">Born <strong>{person.birth_year}</strong></li>
				<li className="list-group-item">In <strong>{person.films.length}</strong> films</li>
			</ul>
		</div>
	);
}

export default Person;
