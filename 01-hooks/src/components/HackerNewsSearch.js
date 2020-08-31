import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';

const HackerNewsSearch = () => {
	const [query, setQuery] = useState('');
	const [setUrl] = useFetch('');
	const queryRef = useRef();

	useEffect(() => {
		queryRef.current.focus();
	}, []);

	const searchHackerNews = e => {
		e.preventDefault();

		if (query.length < 3) {
			console.log("you must search in order to find");
			return;
		}

		// use custom hook to send search query
		console.log("would search hacker news api, doesnt know how");
		setUrl(`https://hn.algolia.com/api/v1/search_by_date?query=${query}`);
	}

	return (
		<>
			<h2 className="text-center mb-2">Search Hacker News</h2>

			<form onSubmit={searchHackerNews}>
				<div className="input-group">
					<input
						onChange={e => setQuery(e.target.value)}
						ref={queryRef}
						value={query}
						type="text"
						className="form-control"
						placeholder="Type to search for Hacker News articles"
					/>

					<div className="input-group-append">
						<button type="submit" className="btn btn-success">Search</button>
						{/* <button onClick={() => setQuery('')} className="btn btn-warning">Clear</button> */}
					</div>
				</div>
			</form>

			<div className="mt-3">
				<p>Search for <strong>QWERTY</strong> resulted in <strong>1337</strong> hits.</p>

				<ul className="search-results text-left list-group">
					<li className="list-group-item">
						<h3>Title 1</h3>
					</li>
					<li className="list-group-item">
						<h3>Title 2</h3>
					</li>
					<li className="list-group-item">
						<h3>Title 3</h3>
					</li>
				</ul>
			</div>
		</>
	)
}

export default HackerNewsSearch;
