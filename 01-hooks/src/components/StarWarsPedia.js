import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = 'https://swapi.dev/api';

const StarWarsPedia = () => {

	const [resourceUrl, setResourceUrl] = useState(API_BASE + '/vehicles/');
	const [response, setResponse] = useState({});

	// watch `resourceUrl` for changes and trigger fetching of data from the new `resourceUrl`
	useEffect(() => {
		console.log(`Resource URL changed to '${resourceUrl}', fetching new data...`);

		axios.get(resourceUrl)
		.then(res => {
			// with axios, the 'body' of the response is contained in `res.data`
			console.log(`Response data received:`, res.data);
			setResponse(res.data);
		});
	}, [resourceUrl]);

	return (
		<div>
			<h2>StarWarsPedia</h2>

			<div className="resource-buttons">
				<button onClick={() => setResourceUrl(API_BASE + '/people/')} className="btn btn-outline-primary"><span role="img" aria-label="People">🧑‍🤝‍🧑</span> People</button>
				<button onClick={() => setResourceUrl(API_BASE + '/planets/')} className="btn btn-outline-primary"><span role="img" aria-label="Planet">🪐</span> Planets</button>
				<button onClick={() => setResourceUrl(API_BASE + '/species/')} className="btn btn-outline-primary"><span role="img" aria-label="DNA">🧬</span> Species</button>
				<button onClick={() => setResourceUrl(API_BASE + '/starships/')} className="btn btn-outline-primary"><span role="img" aria-label="UFO">🛸</span> Starships</button>
				<button onClick={() => setResourceUrl(API_BASE + '/vehicles/')} className="btn btn-outline-primary"><span role="img" aria-label="Car">🚙</span> Vehicles</button>
			</div>

			<div className="resource-result text-left mt-3">
				{
					response.count ? (
						<>
							<h3>Showing {response.count} items</h3>

							<div className="d-flex justify-content-between">
								<button
									onClick={() => setResourceUrl(response.previous)}
									disabled={!response.previous ? 'disabled' : ''}
									className="btn btn-outline-info">Previous Page</button>

								<button
									onClick={() => setResourceUrl(response.next)}
									disabled={!response.next ? 'disabled' : ''}
									className="btn btn-outline-info">Next Page</button>
							</div>

							<ul className="resource-result-items mt-3">
								{
									response.results.map((item, index) => {
										return (
											<li key={index}>{item.name}</li>
										)
									})
								}
							</ul>
						</>
					) : (
						<p>Loading...</p>
					)
				}
			</div>

		</div>
	);
}

export default StarWarsPedia;
