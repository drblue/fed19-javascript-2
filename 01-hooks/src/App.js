import React, { useState } from 'react';
import './App.scss';
import StarWarsPedia from './components/StarWarsPedia';

function App() {
	const [showClock, setShowClock] = useState(true);

	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div className="text-center my-5">

				<StarWarsPedia />
			</div>
		</div>
	);
}

export default App;
