import React, { useState } from 'react';

function PointsCounterFunction() {

	const [state, setState] = useState({ pointsCount: 1337 });

	const decreasePoints = () => {
		setState(prevState => ({
			pointsCount: prevState.pointsCount - 1,
		}))
		setState(prevState => ({
			pointsCount: prevState.pointsCount - 1,
		}))
	}

	const increasePoints = () => {
		setState(prevState => ({
			pointsCount: prevState.pointsCount + 1,
		}))
		setState(prevState => ({
			pointsCount: prevState.pointsCount + 1,
		}))
	}

	return (
		<div className="points-counter">
			<div className="text-center">
				<p className="display-2">{state.pointsCount}</p>
			</div>
			<div className="point-buttons btn-group">
				<button onClick={decreasePoints} className="btn btn-lg btn-danger">-</button>
				<button onClick={increasePoints} className="btn btn-lg btn-success">+</button>
			</div>
		</div>
	);
}

export default PointsCounterFunction;
