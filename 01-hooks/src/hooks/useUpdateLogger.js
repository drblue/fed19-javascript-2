import { useEffect } from 'react';

const useUpdateLogger = (input, name = null) => {
	useEffect(() => {
		console.log(
			name ? `${name} changed to:` : `value changed to:`,
			input
		);
	}, [input])
}

export default useUpdateLogger;
