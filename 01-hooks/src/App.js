import React, { useState } from 'react';
import './App.scss';
import Clock from './components/Clock';

function App() {
	const [showClock, setShowClock] = useState(true);

	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div className="text-center my-5">
				<button onClick={() => setShowClock(!showClock)} className="btn btn-lg btn-outline-success">
					{ showClock ? 'Hide Clock' : 'Show Clock' }
				</button>

				<div className="my-5">
					{
						showClock ? (<Clock />) : 'Time is relative!'
					}
				</div>
			</div>
		</div>
	);
}

export default App;
