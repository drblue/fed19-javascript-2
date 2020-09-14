/**
 * My Little Helpers
 */

/**
 * Extract ID from SWAPI url
 */
export const getIdFromUrl = (url) => {
	const [endpoint, id] = url.replace('http://swapi.dev/api/', '').slice(0, -1).split('/');
	return id;
}
