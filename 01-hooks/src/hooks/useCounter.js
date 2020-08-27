import { useState } from 'react';

const useCounter = (initialCount = 1337) => {
	const [count, setCount] = useState(initialCount);

	const add = () => setCount(prevCount => prevCount + 1)
	const subtract = () => setCount(prevCount => prevCount - 1)

	return { count, add, subtract };
}

export default useCounter;
