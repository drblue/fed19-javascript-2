import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import HackerNewsArticle from './components/HackerNewsArticle';
import HackerNewsSearch from './components/HackerNewsSearch';
import HackerNewsLatest from './components/HackerNewsLatest';

function App() {
	const user = {
		email: 'jn@thehiveresistance.com',
		loggedInSince: 1598948811
	}

	return (
		<BrowserRouter>
			<div className="App container my-3">
				<h1><span role="img" aria-label="A gear">⚙️</span> React Router (with Hooks!)</h1>

				<div className="my-5">
					<Switch>
						<Route exact path='/'>
							<HackerNewsLatest />
						</Route>

						<Route path='/search'>
							<HackerNewsSearch />
						</Route>

						<Route path='/articles/:articleId'>
							<HackerNewsArticle user={user} />
						</Route>
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
