import React from 'react';
import './App.scss';
import GitHubRepoStats from './components/GitHubRepoStats';

function App() {

	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="!?">❗️❓</span> React Query</h1>

			<div className="my-5">
				<GitHubRepoStats />
			</div>
		</div>
	);
}

export default App;
