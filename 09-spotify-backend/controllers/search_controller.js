/**
 * Search Controller
 */
const debug = require('debug')('09-spotify-backend:SearchController');
const SpotifyAPI = require('../services/SpotifyAPI');


/**
 * Search
 *
 * GET /
 */
module.exports = async (req, res) => {
	const query = {
		q: req.query.q,
		type: 'playlist',
	};
	debug(`Searching for playlist containing '${query.q}'...`);

	const search_results = await SpotifyAPI.search(query);
	debug('Spotify API search results:', search_results);

	if (!search_results.playlists.items.length) {
		res.status(404).send({ status: 'fail', message: 'No 🔥 matches found.'});
	}

	res.status(200).send({ status: 'success', data: search_results.playlists.items});
}
