import React from 'react';
import { useQuery } from 'react-query';
import { getRepositories } from '../services/GitHubAPI';
import PacmanLoader from 'react-spinners/PacmanLoader';

const GitHubRepositories = () => {

	const { data, isLoading, error } = useQuery(['repos', 'drblue'], getRepositories);

	if (isLoading) {
		return (
			<PacmanLoader color={"#F8D41C"} size={50} />
		);
	}

	if (error) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, app made a boo-boo...</h2>
				<p><strong>Error message:</strong> {error.message}</p>
			</div>
		)
	}

	return (
		<>
			<h2>Repositories</h2>

			<ul className="list-group">
				{data.map(repo => (
					<li key={repo.id} className="list-group-item">
						<h5 className="mb-1">{repo.name}</h5>
						<p className="mb-1">{repo.description}</p>
						<small>Size: {repo.size}</small>
					</li>
				))}
			</ul>
		</>
	);
}

export default GitHubRepositories;
