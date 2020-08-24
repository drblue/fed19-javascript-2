import React, { useState, useEffect } from 'react'

const Clock = () => {
	const [time, setTime] = useState('?');

	useEffect(() => {
		console.log("Clock is mounted! Timer started");

		const intervalId = setInterval(() => {
			const now = new Date();
			setTime(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
		}, 1000);

		return () => {
			console.log("Clock is unmounting, stopping timer");
			clearInterval(intervalId);
		}
	}, []);

	return (
		<div>
			<h2>🕑</h2>

			<p className="display-1">{time}</p>
		</div>
	);
}

export default Clock;
