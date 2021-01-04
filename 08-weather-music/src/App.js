import Container from 'react-bootstrap/Container'
import './assets/scss/app.scss'
import SearchWeather from './components/SearchWeather'
import { getCurrentWeather } from './services/OpenWeatherMapAPI'

function App() {
	const handleSearchWeather = async (location) => {
		console.log('User wants to search for weather at location:', location);

		/**
		 * { city: 'Lund' }
		 * { latitude: 55.71, longitude: 13.23 }
		 */
		const weatherData = await getCurrentWeather(location)
	}

	return (
		<Container className="py-3">
			<h1>Weather Music ⛅️🎶</h1>

			<div className="my-5">
				<SearchWeather onSearchWeather={handleSearchWeather} />

			</div>

		</Container>
	);
}

export default App;
