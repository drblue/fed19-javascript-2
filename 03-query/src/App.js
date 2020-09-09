import React from 'react';
import './App.scss';
import { useQuery } from 'react-query';

function App() {
	const { data } = useQuery('repoStats', () =>
		fetch('https://api.github.com/users/drblue')
		.then(res => res.json())
	);

	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="!?">❗️❓</span> React Query</h1>

			<div className="my-5">
				{
					data ? (
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
					) : (
						<h2>Loading...</h2>
					)
				}
			</div>
		</div>
	);
}

export default App;
