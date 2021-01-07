import { useCallback, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import './assets/scss/app.scss'
import SearchWeather from './components/SearchWeather'
import { getCurrentWeather } from './services/OpenWeatherMapAPI'

function App() {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [error, setError] = useState(null)

	const handleSearchWeather = useCallback(async (location) => {
		console.log('User wants to search for weather at location:', location);

		/**
		 * { city: 'Lund' }
		 * { latitude: 55.71, longitude: 13.23 }
		 */

		try {
			// fetch weather for location
			const weatherData = await getCurrentWeather(location)
			console.log("got data back from OWMAPI-service:", weatherData)

			// update currentWeather state with weather data
			setCurrentWeather(weatherData)

			// reset any errors
			setError(null)

		} catch (e) {
			setError(e.message)
		}
	}, [])

	return (
		<Container className="py-3">
			<h1>Weather Music ⛅️🎶</h1>

			<div className="my-5 text-center">
				<div className="search-weather mb-5">
					<SearchWeather onSearchWeather={handleSearchWeather} />
				</div>

				{error && (
					<Alert variant="warning" className="mb-5">
						{error}
					</Alert>
				)}

				{currentWeather && (
					<div className="current-weather mb-5">
						<h2>Current Weather in {currentWeather.name}</h2>

						<div className="display-4">Temp: {currentWeather.temperature}</div>

						<ul className="current-weather-conditions list-inline">
							{currentWeather.conditions.map((condition, index) => (
								<li className="current-weather-condition list-inline-item" key={index}>
									<img src={condition.icon} alt={condition.text} title={condition.text} />
								</li>
							))}
						</ul>
					</div>
				)}
			</div>

		</Container>
	);
}

export default App;
