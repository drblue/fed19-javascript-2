import React from 'react';
import './App.scss';
import PreferencesClass from './components/PreferencesClass';
import PreferencesFunction from './components/PreferencesFunction';

function App() {
	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A fish on a hook">🎣</span> React Hooks</h1>

			<div className="text-center my-5">
				<h2>PreferencesFunction</h2>
				<PreferencesFunction />

				<hr className="my-5" />

				<h2>PreferencesClass</h2>
				<PreferencesClass />
			</div>
		</div>
	);
}

export default App;
