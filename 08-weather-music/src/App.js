import { useCallback, useState } from 'react'
import { Alert, Container, Row } from 'react-bootstrap'
import ClipLoader from 'react-spinners/ClipLoader'
import './assets/scss/app.scss'
import PlaylistCard from './components/PlaylistCard'
import SearchWeather from './components/SearchWeather'
import { getWeatherForLocation } from './providers/WeatherProvider'
import { searchForPlaylistsContaining } from './providers/MusicProvider'

function App() {
	const [currentWeather, setCurrentWeather] = useState(null)
	const [playlists, setPlaylists] = useState(null)
	const [error, setError] = useState(null)
	const [loading, setLoading] = useState(false)

	const handleSearchWeather = useCallback(async (location) => {
		// show spinner
		setLoading(true)

		try {
			// fetch weather for location
			const weatherData = await getWeatherForLocation(location)

			// update currentWeather state with weather data
			setCurrentWeather(weatherData)

			// fetch playlists for weather condition
			if (weatherData.conditions) {
				// find first weather condition
				const condition = weatherData.conditions[0].text

				// search for playlists matching the weather condition
				const playlistsSearchResult = await searchForPlaylistsContaining(condition)

				// update playlist state with search result
				setPlaylists(playlistsSearchResult)
			}

			// reset any errors
			setError(null)

			// hide spinner
			setLoading(false)

		} catch (e) {
			// show error
			setError(e.message)

			// hide spinner
			setLoading(false)
		}
	}, [])

	return (
		<>
			{loading && (<div id="loading-spinner"><ClipLoader size={50} color={'#aaa'} /></div>)}

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

					{!loading && currentWeather && (
						<div className="current-weather mb-5">
							<h2>Current Weather in {currentWeather.name}</h2>

							<div className="display-4">Temp: {currentWeather.temperature}&deg;C</div>

							<ul className="current-weather-conditions list-inline">
								{currentWeather.conditions.map((condition, index) => (
									<li className="current-weather-condition list-inline-item" key={index}>
										<img src={condition.icon} alt={condition.text} title={condition.text} />
									</li>
								))}
							</ul>
						</div>
					)}

					{!loading && playlists && (
						<div className="weather-playlists mb-5">
							<h2 className="mb-3">Music for the weather</h2>

							{playlists.length ? (
								<Row>
									{playlists.map((playlist, index) => (
										<PlaylistCard playlist={playlist} key={index} />
									))}
								</Row>
							) : (
								<p className="text-center">
									Sorry, no music for the current weather found <span role="img" aria-label="A sad emoji">😔</span>.
								</p>
							)}
						</div>
					)}
				</div>

			</Container>
		</>
	);
}

export default App;
