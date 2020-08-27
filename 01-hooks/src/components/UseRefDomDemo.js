import React, { useState, useEffect, useRef } from 'react';

const STARSHIPS = ["CR90 corvette","Star Destroyer","Sentinel-class landing craft","Death Star","Millennium Falcon","Y-wing","X-wing","TIE Advanced x1","Executor","Rebel transport","Slave 1","Imperial shuttle","EF76 Nebulon-B escort frigate","Calamari Cruiser","A-wing","B-wing","Republic Cruiser","Droid control ship","Naboo fighter","Naboo Royal Starship","Scimitar","J-type diplomatic barge","AA-9 Coruscant freighter","Jedi starfighter","H-type Nubian yacht","Republic Assault ship","Solar Sailer","Trade Federation cruiser","Theta-class T-2c shuttle","Republic attack cruiser","Naboo star skiff","Jedi Interceptor","arc-170","Banking clan frigte","Belbullab-22 starfighter","V-wing"];

const UseRefDomDemo = () => {
	const [query, setQuery] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const prevResultCount = useRef(null);
	const prevQueries = useRef([]);
	const queryRef = useRef();

	const clearSearch = () => {
		setSearchResult([]);
		setQuery('');
		queryRef.current.focus();
	}

	const searchStarShip = e => {
		e.preventDefault();
	}

	useEffect(() => {
		if (query.length < 3) {
			return;
		}

		prevResultCount.current = searchResult.length;
		setSearchResult(
			STARSHIPS.filter(starship =>
				starship.toLowerCase().includes(query.toLowerCase())
			)
		);
	}, [query]);

	useEffect(() => {
		queryRef.current.focus();
	}, []);

	return (
		<>
			<h2 className="text-center mb-2">Search Starship</h2>

			<form onSubmit={searchStarShip}>
				<div className="form-group">
					<input
						onChange={e => {
							if (query.length > 2) {
								prevQueries.current.push(query);
							}
							setQuery(e.target.value);
						}}
						ref={queryRef}
						value={query}
						type="text"
						className="form-control"
						placeholder="Type to search" />
				</div>

				<p className="text-muted small">{prevQueries.current.join(", ")}</p>

				<div className="text-center">
					<button className="btn btn-primary" onClick={clearSearch}>Clear</button>
				</div>
			</form>

			<div className="mt-3">
				{
					prevResultCount.current ? (
						<p className="text-muted small">Your previous search resulted in {prevResultCount.current} matches</p>
					) : ''
				}

				{
					query.length > 2 ? (
						<>
							<p>Search for <strong>{query}</strong> resulted in <strong>{searchResult.length}</strong> matches.</p>

							<ul className="search-results">
								{searchResult.map((result, key) => (<li key={key}>{result}</li>))}
							</ul>
						</>
					) : ''
				}

			</div>
		</>
	);
}

export default UseRefDomDemo;
