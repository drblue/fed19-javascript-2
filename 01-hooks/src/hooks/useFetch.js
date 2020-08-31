import { useState, useEffect } from 'react';

const useFetch = (initialUrl) => {
	const [url, setUrl] = useState(initialUrl);

	useEffect(() => {
		console.log(`useFetch URL changed to:`, url);

		// (set loading-state to true)

		// do async http request

		// parse data as json

		// set stateful data

		// (set loading-state to false)

	}, [url]);

	return [setUrl];
}

export default useFetch;
