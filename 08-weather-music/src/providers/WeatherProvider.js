/**
 * Provide Weather services
 */

import {
	getCurrentWeatherData as OWMAPI_getCurrentWeatherData,
} from '../services/OpenWeatherMapAPI'

/**
 * Get current weather for location.
 *
 * @param {Object} location Object with city or latitude/longitude to search for
 */
export const getWeatherForLocation = location => {
	return OWMAPI_getCurrentWeatherData(location)
}
