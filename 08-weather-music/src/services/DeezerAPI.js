/**
 * Deezer API service
 */

import axios from 'axios'
import queryString from 'query-string'

const requestConfig = {
	headers: {
		'X-Requested-With': 'axios',
	},
}
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com'
const baseApiUrl = 'https://api.deezer.com'

/**
 * Get URL for API endpoint
 *
 * @param {String} endpoint API endpoint
 */
const getApiUrlForEndpoint = (endpoint) => {
	return corsProxyUrl + '/' + baseApiUrl + '/' + endpoint
}

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint, queryParameters = {}) => {
	// stringify query parameters
	const queryStr = queryString.stringify(queryParameters)

	// send request
	const res = await axios.get(
		getApiUrlForEndpoint(endpoint) + '?' + queryStr,
		requestConfig
	);

	// return response
	return res.data;
}

/**
 * Search for a playlist
 *
 * @param {String} query Query to search for
 * @param {Number} index Result to start at
 * @param {Number} limit Results to retrieve
 */
export const searchPlaylist = async (query, index = 0, limit = 10) => {
	const response = await get('search/playlist', {
		q: query,
		index,
		limit,
	})

	const playlists = response.data.map(playlist => {
		return {
			title: playlist.title,
			cover: playlist.picture_big,
			nb_tracks: playlist.nb_tracks,
			link: playlist.link,
			username: playlist.user.name,
		}
	})

	return playlists;
}
