/**
 * WeatherApi API service
 */

import axios from 'axios'
import queryString from 'query-string'

const requestConfig = {}
const baseApiUrl = 'https://api.weatherapi.com/v1'
const apiKey = process.env.REACT_APP_WEATHERAPI_API_KEY

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint, queryParameters) => {
	// append api key to query parameters
	queryParameters.key = apiKey

	// stringify query parameters
	const queryStr = queryString.stringify(queryParameters)

	// send request
	const res = await axios.get(`${baseApiUrl}${endpoint}?${queryStr}`, requestConfig);

	// return response
	return res.data;
}

/**
 * Get current weather data for location
 *
 * @param {Object} location Location to get current weather data for
 */
export const getCurrent = async (location) => {
	const response = await get('/current.json', {
		q: location.city
			? location.city
			: `${location.latitude},${location.longitude}`
	})

	console.log("Response from WeatherAPI:", response);

	const currentWeather = {
		name: response.location.name,
		latitude: response.location.lat,
		longitude: response.location.lon,
		temperature: response.current.temp_c,
		feels_like: response.current.feelslike_c,
		conditions: [
			{
				text: response.current.condition.text,
				icon: response.current.condition.icon,
			},
		]
	}

	return currentWeather
}
