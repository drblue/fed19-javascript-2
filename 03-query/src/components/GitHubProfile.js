import React from 'react';
import { useQuery } from 'react-query';
import { getProfile } from '../services/GitHubAPI';
import PacmanLoader from 'react-spinners/PacmanLoader';

const GitHubProfile = () => {

	const { data, isLoading, isError, error } = useQuery(['repoStats', 'drblue'], getProfile);

	if (isLoading) {
		return (
			<PacmanLoader color={"#F8D41C"} size={50} />
		);
	}

	if (isError) {
		return (
			<div className="alert alert-warning">
				<h2>Sorry, app made a boo-boo...</h2>
				<p><strong>Error message:</strong> {error && error.message}</p>
			</div>
		)
	}

	return (
		<>
			<h2>{data.name}</h2>
			<h3 className="mb-3">{data.company}</h3>
			<p className="mb-3">{data.bio}</p>

			<ul className="list-group list-group-horizontal">
				<li className="list-group-item">
					<span role="img" aria-label="two eyes">👀</span>{' '}
					<strong>{data.following}</strong> following
				</li>

				<li className="list-group-item">
					<span role="img" aria-label="three shining stars">✨</span>{' '}
					<strong>{data.followers}</strong> followers
				</li>

				<li className="list-group-item">
					<span role="img" aria-label="three books stacked on eachother">📚</span>{' '}
					<strong>{data.public_repos}</strong> public repositories
				</li>
			</ul>
		</>
	);
}

export default GitHubProfile;
