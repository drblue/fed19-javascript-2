import Container from 'react-bootstrap/Container'
import './assets/scss/app.scss'
import SearchWeather from './components/SearchWeather'

function App() {
	const handleSearchWeather = (location) => {
		console.log('User wants to search for weather at location:', location);
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
