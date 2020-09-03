import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HackerNewsArticle from './components/HackerNewsArticle';
import HackerNewsSearch from './components/HackerNewsSearch';
import HackerNewsLatest from './components/HackerNewsLatest';

function App() {
	return (
		<div className="App container my-3">
			<h1><span role="img" aria-label="A gear">⚙️</span> React Router (with Hooks!)</h1>

			<div className="my-5">
				<Routes>
					<Route path='/'>
						<HackerNewsLatest />
					</Route>

					<Route path='/search'>
						<HackerNewsSearch />
					</Route>

					<Route path='/articles'>
						<Route path='/'>
							<HackerNewsLatest />
						</Route>

						<Route path=':articleId'>
							<HackerNewsArticle />
						</Route>
					</Route>
				</Routes>
			</div>
		</div>
	);
}

export default App;
