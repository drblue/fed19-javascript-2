import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useUrlSearchParams } from "use-url-search-params";

const HackerNewsSearch = () => {
	const [query, setQuery] = useState('');
	const [{ data, isLoading, error }, setUrl] = useFetch('');
	const [searchParams, setSearchParams] = useUrlSearchParams();
	const queryRef = useRef();
	const searchQuery = useRef('');

	useEffect(() => {
		console.log(searchParams);
		if (searchParams.q) {
			setQuery(searchParams.q);
			searchHackerNewsApi(searchParams.q);
		} else {
			queryRef.current.focus();
		}
	}, []);

	const searchHackerNewsApi = query => {
		searchQuery.current = query;
		setUrl(`https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=story`);
	}

	const onSubmit = e => {
		e.preventDefault();

		if (query.length < 3) {
			console.log("you must search in order to find");
			return;
		}

		// set query in UrlSearchParams
		setSearchParams({ q: query });

		// trigger search query
		searchHackerNewsApi(query);
	}

	const renderSearchResults = hits => {
		return hits.map((article, index) => (
			<li key={index} className="list-group-item">
				<h3>{article.title}</h3>

				<p className="text-muted small">
					Posted at {article.created_at} by {article.author}
				</p>

				<p>
					<Link to={{
						pathname: `/articles/${article.objectID}`,
						state: {
							article,
						},
					}} className="btn btn-sm btn-primary">Read more</Link>
				</p>
			</li>
		))
	}

	return (
		<>
			<div className="text-center">
				<h2 className="mb-2">Search Hacker News</h2>

				<p>Did't find anything? Check out the <Link to='/'>latest news</Link>!</p>

				<form onSubmit={onSubmit}>
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
			</div>

			<div className="mt-3">
				{
					isLoading ? (
						<h2 className="text-center">Loading...</h2>
					) : (
						error ? (
							<div className="alert alert-warning">
								Bollocks. Something bad happened. Tea?

								<p className="small">{error}</p>
							</div>
						) : (
							data && data.hits ? (
								<>
									<p className="text-center">Search for <strong>{searchQuery.current}</strong> resulted in <strong>{data.nbHits}</strong> hits.</p>

									<ul className="search-results list-group">
										{renderSearchResults(data.hits)}
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
