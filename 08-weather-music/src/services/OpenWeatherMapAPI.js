/**
 * OpenWeatherMap API service
 */

import axios from 'axios'
import queryString from 'query-string'

const requestConfig = {}
const baseApiUrl = 'https://api.openweathermap.org/data/2.5'
const apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint, queryParameters) => {
	// append api key to query parameters
	queryParameters.appid = apiKey

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
export const getCurrentWeatherData = async (location) => {
	const query_parameters = location.city
		? { q: location.city }
		: { lat: location.latitude, lon: location.longitude }

	query_parameters.units = 'metric'

	const response = await get('/weather', query_parameters)

	const currentWeather = {
		name: response.name,
		latitude: response.coord.lat,
		longitude: response.coord.lon,
		temperature: response.main.temp,
		feels_like: response.main.feels_like,
		conditions: response.weather.map(condition => {
			return {
				text: condition.description,
				icon: `http://openweathermap.org/img/wn/${condition.icon}.png`,
			}
		})
	}

	return currentWeather
}
