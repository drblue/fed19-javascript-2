import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import useLocalStorage from '../hooks/useLocalStorage';

const API_BASE = 'https://swapi.dev/api';

const StarWarsPedia = () => {

	const [resourceUrl, setResourceUrl] = useState(API_BASE + '/vehicles/');
	const [response, setResponse] = useState({});
	const [savedResource, saveResource] = useLocalStorage('resource', 'vehicles');
	console.log(`savedResource is '${savedResource}'`);
	const resourceType = useRef('vehicles');
	const prevResourceType = useRef(null);

	const changeResource = resource => {
		prevResourceType.current = resourceType.current;
		resourceType.current = resource;
		saveResource(resource);
		setResourceUrl(API_BASE + '/' + resource + '/');
	}

	// watch `resourceUrl` for changes and trigger fetching of data from the new `resourceUrl`
	useEffect(() => {
		axios.get(resourceUrl)
		.then(res => {
			// with axios, the 'body' of the response is contained in `res.data`
			setResponse(res.data);
		});

	}, [resourceUrl]);

	return (
		<div>
			<h2>StarWarsPedia</h2>

			{
				prevResourceType.current ? (
					<p className="text-muted small">You previously viewed {prevResourceType.current} <span role="img" aria-label="Female detective">🕵🏻‍♀️</span><span role="img" aria-label="Male detective">🕵🏻‍♂️</span></p>
				) : (
					''
				)
			}

			<div className="resource-buttons">
				<button onClick={() => changeResource('people')} className="btn btn-outline-primary"><span role="img" aria-label="People">🧑‍🤝‍🧑</span> People</button>

				<button onClick={() => changeResource('planets')} className="btn btn-outline-primary"><span role="img" aria-label="Planet">🪐</span> Planets</button>

				<button onClick={() => changeResource('species')} className="btn btn-outline-primary"><span role="img" aria-label="DNA">🧬</span> Species</button>

				<button onClick={() => changeResource('starships')} className="btn btn-outline-primary"><span role="img" aria-label="UFO">🛸</span> Starships</button>

				<button onClick={() => changeResource('vehicles')} className="btn btn-outline-primary"><span role="img" aria-label="Car">🚙</span> Vehicles</button>
			</div>

			<div className="resource-result text-left mt-3">
				{
					response.count ? (
						<>
							<h3>Showing {response.count} {resourceType.current}</h3>

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
