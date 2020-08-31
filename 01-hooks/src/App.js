import React from 'react';
import './App.scss';
import HackerNewsSearch from './components/HackerNewsSearch';

function App() {
	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div className="text-center my-5">

				<HackerNewsSearch />
			</div>
		</div>
	);
}

export default App;
