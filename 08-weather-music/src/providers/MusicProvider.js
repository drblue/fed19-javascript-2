/**
 * Provide Music services
 */

import {
	searchPlaylist as DZAPI_searchPlaylist,
} from '../services/DeezerAPI'

/**
 * Search for playlists matching the query.
 *
 * @param {String} query String with query to search for
 */
export const searchForPlaylistsContaining = (query, page = 1, results_per_page = 10) => {
	const index = (page * results_per_page) - results_per_page

	return DZAPI_searchPlaylist(query, index, results_per_page)
}
