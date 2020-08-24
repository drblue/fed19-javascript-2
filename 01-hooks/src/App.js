import React from 'react';
import './App.scss';
import PointsCounter from './components/PointsCounter';

function App() {
	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div className="text-center my-5">
				<h2>Home Team</h2>
				<PointsCounter />

				<hr className="my-5" />

				<h2>Away Team</h2>
				<PointsCounter />
			</div>
		</div>
	);
}

export default App;
