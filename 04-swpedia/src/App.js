import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/partials/GlobalFetchingSpinner';
import Films from './components/films/Films';
import FilmDetails from './components/films/FilmDetails';
import Home from './components/Home';
import Navbar from './components/nav/Navbar';
import NotFound from './components/NotFound';
import People from './components/people/People';
import PersonDetails from './components/people/PersonDetails';

function App() {
	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<Navbar />

			<div id="App" className="container py-3">
				<GlobalFetchingSpinner />
				<Routes>

					<Route path="/">
						<Home />
					</Route>

					<Route path="/films">
						<Route path="/">
							<Films />
						</Route>

						<Route path="/:filmId">
							<FilmDetails />
						</Route>
					</Route>

					<Route path="/people">
						<Route path="/">
							<People />
						</Route>

						<Route path="/:personId">
							<PersonDetails />
						</Route>
					</Route>

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</ReactQueryConfigProvider>
	);
}

export default App;
