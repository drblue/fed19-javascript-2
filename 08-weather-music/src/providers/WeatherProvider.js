/**
 * Provide Weather services
 */

/*
import {
	getCurrentWeatherData as OWMAPI_getCurrentWeatherData,
} from '../services/OpenWeatherMapAPI'
*/
import {
	getCurrent as WAAPI_getCurrent
} from '../services/WeatherApiAPI'

/**
 * Get current weather for location.
 *
 * @param {Object} location Object with city or latitude/longitude to search for
 */
export const getWeatherForLocation = location => {
	return WAAPI_getCurrent(location)
}
