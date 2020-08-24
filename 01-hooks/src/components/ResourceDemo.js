import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ResourceDemo = () => {
	const [resource, setResource] = useState('todos');
	const [items, setItems] = useState([]);
	const [page, setPage] = useState(1);

	// watch `resource` for changes and trigger side-effect
	useEffect(() => {
		console.log(`resource changed to ${resource}!!`);

		axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		.then(res => {
			console.log("Request returned a result:", res.data);
			setItems(res.data);
		});
	}, [resource, page]);

	return (
		<div>
			<h2>ResourceDemo</h2>

			<div className="btn-group">
				<button onClick={() => setResource('photos')} className="btn btn-primary">Photos</button>
				<button onClick={() => setResource('posts')} className="btn btn-primary">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-primary">Todos</button>
			</div>

			<div className="mt-3 text-left">
				<h3>Showing {items.length} {resource} at page {page}</h3>

				<div className="d-flex justify-content-between">
					<button onClick={() => page > 1 ? setPage(page - 1) : ''} className="btn btn-info">Previous Page</button>
					<button onClick={() => setPage(page + 1)} className="btn btn-info">Next Page</button>
				</div>

				<ul>
					{items.map((item, index) => (<li key={index}>{item.title}</li>))}
				</ul>
			</div>
		</div>
	);
}

export default ResourceDemo;
