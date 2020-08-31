import React, { useState, useEffect, useRef } from 'react';
import useFetch from '../hooks/useFetch';

const HackerNewsSearch = () => {
	const [query, setQuery] = useState('');
	const [{ data, isLoading, error }, setUrl] = useFetch('');
	const queryRef = useRef();
	const searchQuery = useRef('');

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
		searchQuery.current = query;
		setUrl(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story`);
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
				{
					isLoading ? (
						<h2>Loading...</h2>
					) : (
						error ? (
							<div className="alert alert-warning">
								Bollocks. Something bad happened. Tea?

								<p className="small">{error}</p>
							</div>
						) : (
							data && data.hits ? (
								<>
									<p>Search for <strong>{searchQuery.current}</strong> resulted in <strong>{data.nbHits}</strong> hits.</p>

									<ul className="search-results text-left list-group">
										{
											data.hits.map((hit, index) => (
												<li key={index} className="list-group-item">
													<h3>{hit.title}</h3>
													<p className="text-muted small">Posted at {hit.created_at} by {hit.author}</p>
													<p><a href="#" className="btn btn-sm btn-primary">Read more</a></p>
												</li>
											))
										}
									</ul>
								</>
							) : ''
						)
					)
				}

			</div>
		</>
	)
}

export default HackerNewsSearch;
