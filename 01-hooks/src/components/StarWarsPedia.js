import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StarWarsPedia = () => {
	const [resourceUrl, setResourceUrl] = useState('https://swapi.dev/api/vehicles/');
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
				<button onClick={() => {}} className="btn btn-outline-primary">Vehicles</button>
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
