import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner';
import Home from './components/Home';
import Navbar from './components/Navbar';
import People from './components/People';
import PersonDetails from './components/PersonDetails';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';

function App() {
	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<Navbar />
			<GlobalFetchingSpinner />

			<div className="App container py-3">
				<Routes>

					<Route path="/">
						<Home />
					</Route>

					<Route path="/people">
						<Route path="/">
							<People />
						</Route>

						<Route path="/:personId">
							<PersonDetails />
						</Route>
					</Route>

				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</ReactQueryConfigProvider>
	);
}

export default App;
