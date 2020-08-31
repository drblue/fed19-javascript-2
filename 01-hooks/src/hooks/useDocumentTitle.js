import { useState, useEffect } from 'react';

const useDocumentTitle = (initialTitle) => {
	const [title, setTitle] = useState(initialTitle);

	useEffect(() => {
		document.title = title;
	}, [title]);

	return [title, setTitle];
}

export default useDocumentTitle;
