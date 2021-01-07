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
 * @todo Split parameter into endpoint & object of query-string key/value pairs. Also split `apiKeyQueryString` to accomodate this.
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
