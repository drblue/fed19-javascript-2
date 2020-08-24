import React, { useState } from 'react';

function PointsCounterFunction() {

	const [points, setPoints] = useState(0);
	const [supporters, setSupporters] = useState(10);

	const decreasePoints = () => {
		setPoints(prevPoints => prevPoints - 1);
	}

	const increasePoints = () => {
		setPoints(prevPoints => prevPoints + 1);
	}

	return (
		<div className="points-counter">
			<div className="text-center">
				<p className="display-2">{points}</p>
			</div>
			<div className="point-buttons btn-group">
				<button onClick={decreasePoints} className="btn btn-lg btn-danger">-</button>
				<button onClick={increasePoints} className="btn btn-lg btn-success">+</button>
			</div>

			<div className="text-center">
				<p className="display-3">Supporters: {supporters}</p>
			</div>
			<div className="point-buttons btn-group">
				<button onClick={() => {
					setSupporters(prevSupporters => prevSupporters - 1)
				}} className="btn btn-lg btn-danger">-</button>

				<button onClick={() => {
					setSupporters(prevSupporters => prevSupporters + 1)
				}} className="btn btn-lg btn-success">+</button>
			</div>
		</div>
	);
}

export default PointsCounterFunction;
