/**
 * OpenWeatherMap API service
 */

import axios from 'axios'

const requestConfig = {}
const baseApiUrl = 'https://api.openweathermap.org/data/2.5'
const apiKeyQueryString = `&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`

/**
 * HTTP GET
 *
 * @param {String} endpoint API endpoint
 */
const get = async (endpoint) => {
	const res = await axios.get(baseApiUrl + endpoint + apiKeyQueryString, requestConfig);
	return res.data;
}

/**
 * Get current weather data for location
 *
 * @param {Object} location Location to get current weather data for
 */
export const getCurrentWeather = async (location) => {
	let queryString = location.city
		? `q=${location.city}`
		: `lat=${location.latitude}&lon=${location.longitude}`
	queryString += '&units=metric'

	const response = await get(`/weather?${queryString}`)

	console.log("response", response)
}
