/**
 * Deezer API service
 */

import axios from 'axios'
import queryString from 'query-string'

const requestConfig = {}
const baseApiUrl = 'https://api.deezer.com'

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint, queryParameters = {}) => {
	// stringify query parameters
	const queryStr = queryString.stringify(queryParameters)

	// send request
	const res = await axios.get(`${baseApiUrl}${endpoint}?${queryStr}`, requestConfig);

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
const searchPlaylist = (query, index = 0, limit = 10) => {

}
