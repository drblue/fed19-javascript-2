import React, { Component } from 'react';

class PointsCounter extends Component {
	state = {
		pointsCount: 0,
	}

	decreasePoints = () => {
		this.setState(prevState => ({
			pointsCount: prevState.pointsCount - 1,
		}));
		this.setState(prevState => ({
			pointsCount: prevState.pointsCount - 1,
		}));
	}

	increasePoints = () => {
		this.setState(prevState => ({
			pointsCount: prevState.pointsCount + 1,
		}));
		this.setState(prevState => ({
			pointsCount: prevState.pointsCount + 1,
		}));
	}

	render() {
		return (
			<div className="points-counter">
				<div className="text-center">
					<p className="display-2">{this.state.pointsCount}</p>
				</div>
				<div className="point-buttons btn-group">
					<button onClick={this.decreasePoints} className="btn btn-lg btn-danger">-</button>
					<button onClick={this.increasePoints} className="btn btn-lg btn-success">+</button>
				</div>
			</div>
		);
	}
}

export default PointsCounter;
