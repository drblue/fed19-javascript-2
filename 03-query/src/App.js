import React, { useState } from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import './App.scss';
import GitHubProfile from './components/GitHubProfile';
import GitHubRepositories from './components/GitHubRepositories';
import Navbar from './components/Navbar';
import config from './config';

function App() {
	const [page, setPage] = useState('profile');

	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<div className="App container my-3">
				<h1><span role="img" aria-label="!?">❗️❓</span> React Query</h1>

				<Navbar setPage={setPage} />

				<div className="my-5">
					{page === 'profile' ? <GitHubProfile /> : <GitHubRepositories />}
				</div>
			</div>
			<ReactQueryDevtools initialIsOpen position="bottom-right" />
		</ReactQueryConfigProvider>
	);
}

export default App;
