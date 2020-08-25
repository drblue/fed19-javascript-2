import React, { useState, useEffect, useMemo } from 'react'
import axios from 'axios';

const paginateArray = (items, page, itemsPerPage) => {
	for (let i = 0; i < 500000000; i++) {}

	console.log(`Paginating array for page ${page} with ${itemsPerPage} items per page`, items);

	return items.slice(
		page * itemsPerPage - itemsPerPage,
		page * itemsPerPage
	);
}

const ResourceDemo = () => {
	const [resource, setResource] = useState('todos'); // 0
	const [items, setItems] = useState([]); // 1
	const [page, setPage] = useState(1); // 2
	const [counter, setCounter] = useState(1); // 3
	const [tooMuchFreeTime, setTooMuchFreeTime] = useState(false); // 4

	console.log("Look ma, I'm rendering");

	// watch `resource` for changes and trigger side-effect
	useEffect(() => {
		console.log(`Side-effect triggered due to change in either resource, page or counter state variable`);

		axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
		.then(res => {
			console.log("Request returned a result:", res.data);
			setItems(res.data);
		});
	}, [resource]);

	// paginate
	const itemsPerPage = 5;
	const paginatedItems = useMemo(() => {
		console.log("Memo for paginatedItems called");
		return paginateArray(items, page, itemsPerPage);
	}, [items, page]);
	// const paginatedItems = paginateArray(items, page, itemsPerPage);

	// watch `counter`
	useEffect(() => {
		console.log("Side-effect for counter triggered due to change of counter's value");
		if (counter > 10) {
			setTooMuchFreeTime(true);
		}
	}, [counter]);

	return (
		<div>
			<h2>ResourceDemo</h2>

			<div>
				<button onClick={() => setCounter(prevCounter => prevCounter + 1)} className={tooMuchFreeTime ? "btn btn-danger" : "btn btn-success"}>
					You have click me {counter} times!
				</button>
			</div>

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
					{paginatedItems.map((item, index) => (<li key={index}>{item.title}</li>))}
				</ul>
			</div>
		</div>
	);
}

export default ResourceDemo;
