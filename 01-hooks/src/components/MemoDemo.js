import React, { useState, useMemo } from 'react';

const slowFunc = (a) => {
	console.log("Running slow operation for:", a);
	let j;
	for (let i = 0; i < 300000000; i++) {
		j = i + 1;
	}
	return a * 2;
}

const MemoDemo = () => {
	const [num, setNum] = useState(0);
	const [darkMode, setDarkMode] = useState(false);

	console.log("Rendering...");

	// const calcedNum = slowFunc(num);

	console.log("Before slow calculation");
	const calcedNum = useMemo(() => {
		// call slow func to calculate some bogus number
		return slowFunc(num);
	}, [num]);
	console.log("After slow calculation");

	return (
		<>
			<div className="form-group">
				<input type="number" onChange={(e) => setNum(e.target.value)} className="form-control" value={num} />
			</div>

			<div id="themeBox" className={darkMode ? 'bg-dark text-white' : ''}>
				<div className="mx-5 my-5">This is some output</div>
			</div>

			<button onClick={() => setDarkMode(!darkMode)}>Change Theme</button>

			<p>calcedNum: {calcedNum}</p>
		</>
	);
}

export default MemoDemo;
