/**
 * Spotify API
 */
const debug = require('debug')('09-spotify-backend:SpotifyAPI');
const got = require('got');

const SPOTIFY_ACCOUNT_BASEURL = 'https://accounts.spotify.com';
const SPOTIFY_API_BASEURL = 'https://api.spotify.com';
let access_token;

/**
 * Get Access Token
 */
const getAccessToken = async (refresh = false) => {
	if (access_token && !refresh) {
		debug('Returning existing Spotify Access Token');
		return access_token;
	}

	debug('Retrieve new Access Token from Spotify');
	const response = await got(SPOTIFY_ACCOUNT_BASEURL + '/api/token', {
		method: 'POST',
		username: process.env.SPOTIFY_CLIENT_ID,
		password: process.env.SPOTIFY_CLIENT_SECRET,
		form: {
			grant_type: 'client_credentials',
		},
		responseType: 'json',
	})

	debug('Spotify API response:', response.statusCode, response.body);

	// bail if no success
	if (response.statusCode != 200) {
		return false;
	}

	// update module access_token variable with the access_token from the response
	access_token = response.body.access_token

	return access_token;
}

/**
 * Search
 */
const search = async (searchParams) => {
	const access_token = await getAccessToken();

	let response;
	try {
		response = await got(SPOTIFY_API_BASEURL + '/v1/search', {
			headers: {
				'Authorization': 'Bearer ' + access_token,
			},
			searchParams,
			responseType: 'json',
		});
	} catch (e) {
		debug('Exception thrown when issuing search request', e);
		return false;
	}

	debug('Got search response', response);

	return response.body;
}


module.exports = {
	getAccessToken,
	search,
}
