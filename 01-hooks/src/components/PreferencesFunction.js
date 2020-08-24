import React, { useState } from 'react';

const PreferencesFunction = () => {
	const [counter, setCounter] = useState(0);
	const [darkTheme, setDarkTheme] = useState(false);

	return (
		<div>
			<p>Count: {counter}</p>
			<button onClick={() => setCounter(counter - 1)}>-</button>
			<button onClick={() => setCounter(counter + 1)}>+</button>

			<p>Dark Theme Active?: {darkTheme ? 'YAS!' : 'nope, too bright'}</p>
			<button onClick={() => setDarkTheme(!darkTheme)}>Change theme</button>
		</div>
	);
}

export default PreferencesFunction;
