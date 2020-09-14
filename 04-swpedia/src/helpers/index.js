/**
 * My Little Helpers
 */

/**
 * Extract ID from SWAPI url
 */
export const getIdFromUrl = (url) => {
	// eslint-disable-next-line
	const [endpoint, id] = url.replace('http://swapi.dev/api/', '').slice(0, -1).split('/');
	return id;
}
