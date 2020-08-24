import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ResourceDemo = () => {
	const [resource, setResource] = useState('todos');
	const [items, setItems] = useState([]);

	// watch `resource` for changes and trigger side-effect
	useEffect(() => {
		console.log(`resource changed to ${resource}!!`);

		axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		.then(res => {
			console.log("Request returned a result:", res.data);
			setItems(res.data);
		});
	}, [resource]);

	return (
		<div>
			<h2>ResourceDemo</h2>

			<div className="btn-group">
				<button onClick={() => setResource('photos')} className="btn btn-primary">Photos</button>
				<button onClick={() => setResource('posts')} className="btn btn-primary">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-primary">Todos</button>
			</div>

			<div className="mt-3 text-left">
				<h3>Showing {items.length} {resource}</h3>

				<ul>
					{items.map((item, index) => (<li key={index}>{item.title}</li>))}
				</ul>
			</div>
		</div>
	);
}

export default ResourceDemo;
