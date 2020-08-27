import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

function PointsCounterFunction() {

	const { count, add, subtract } = useCounter();

	// const [points, setPoints] = useState(0);
	const [supporters, setSupporters] = useState(10);

	const decreasePoints = () => {
		// setPoints(prevPoints => prevPoints - 1);
		subtract();
	}

	const increasePoints = () => {
		// setPoints(prevPoints => prevPoints + 1);
		add();
	}

	const decreaseSupporters = () => {
		setSupporters(prevSupporters => prevSupporters - 1)
	}

	const increaseSupporters = () => {
		setSupporters(prevSupporters => prevSupporters + 1)
	}

	return (
		<div className="points-counter">
			<div className="text-center">
				<p className="display-2">{count}</p>
			</div>
			<div className="point-buttons btn-group">
				<button onClick={decreasePoints} className="btn btn-lg btn-danger">-</button>
				<button onClick={increasePoints} className="btn btn-lg btn-success">+</button>
			</div>

			<div className="text-center">
				<p className="display-3">Supporters: {supporters}</p>
			</div>
			<div className="point-buttons btn-group">
				<button onClick={decreaseSupporters} className="btn btn-lg btn-danger">-</button>

				<button onClick={increaseSupporters} className="btn btn-lg btn-success">+</button>
			</div>
		</div>
	);
}

export default PointsCounterFunction;
