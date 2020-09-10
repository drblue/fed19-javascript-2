import React, { useState } from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';

function App() {
	const [page, setPage] = useState('vehicles');

	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<GlobalFetchingSpinner />

			<div className="App container my-3">
				<h1><span role="img" aria-label="!?">👾</span> StarWarsPedia</h1>

				<Navbar setPage={setPage} />

				<div className="my-5">
					{ page === 'planets' ? (<Planets />) : (<Vehicles />) }
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</ReactQueryConfigProvider>
	);
}

export default App;
