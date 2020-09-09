import React from 'react';
import './App.scss';

function App() {
	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="!?">❗️❓</span> React Query</h1>

			<div className="my-5">
				<h2>Name</h2>
				<h3 className="mb-3">Company</h3>
				<p className="mb-3">Biography</p>

				<ul className="list-group list-group-horizontal">
					<li className="list-group-item">
						<span role="img" aria-label="two eyes">👀</span>{' '}
						<strong>X</strong> following
					</li>

					<li className="list-group-item">
						<span role="img" aria-label="three shining stars">✨</span>{' '}
						<strong>Y</strong> followers
					</li>

					<li className="list-group-item">
						<span role="img" aria-label="three books stacked on eachother">📚</span>{' '}
						<strong>Z</strong> public repositories
					</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
