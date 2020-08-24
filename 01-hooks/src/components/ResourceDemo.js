import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ResourceDemo = () => {
	const [resource, setResource] = useState('todos');

	// watch `resource` for changes and trigger side-effect
	useEffect(() => {
		console.log(`resource changed to ${resource}!!`);

		axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		.then(res => {
			console.log("Request returned a result:", res.data);
		});
	}, [resource]);

	return (
		<div>
			<h2>ResourceDemo</h2>

			<div className="btn-group">
				<button onClick={() => setResource('posts')} className="btn btn-primary">Posts</button>
				<button onClick={() => setResource('todos')} className="btn btn-primary">Todos</button>
				<button onClick={() => setResource('users')} className="btn btn-primary">Users</button>
			</div>

			<div className="mt-3">
				<h3>Showing {resource} items</h3>
			</div>
		</div>
	);
}

export default ResourceDemo;
