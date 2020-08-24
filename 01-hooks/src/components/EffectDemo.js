import React, { useState, useEffect } from 'react'

const EffectDemo = () => {

	const [count, setCount] = useState(0);

	console.log("Look, I'm rendering!");

	// componentDidMount
	useEffect(() => {
		console.log("This is a side effect");
	}, []);

	return (
		<div>
			<h2>EffectDemo</h2>

			<p>Counter: {count}</p>

			<div className="btn-group">
				<button onClick={() => setCount(count - 1)} className="btn btn-danger">-</button>
				<button onClick={() => setCount(count + 1)} className="btn btn-success">+</button>
			</div>
		</div>
	);
}

export default EffectDemo;
