import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

const SearchWeather = ({ onSearchWeather }) => {
	const [userLocation, setUserLocation] = useState(false)
	const [city, setCity] = useState("")

	useEffect(() => {
		const positionOptions = {
			timeout: 10 * 1000, // 10 seconds
			maximumAge: 2 * 60 * 60 * 1000, // 2 hours
		}

		const handleSuccess = position => {
			console.log('Gots me a position:', position)
		}

		const handleError = error => {
			console.error('Ooops, could not get a position:', error);
		}

		navigator.geolocation.getCurrentPosition(handleSuccess, handleError, positionOptions)
	}, [])

	const handleChange = (e) => {
		setCity(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!userLocation && city.length < 3) {
			return;
		}

		// let parent know we want to search for weather in `city`
		console.log(`Want to search for weather in city '${city}'...`)

		if (city) {
			onSearchWeather({ city })
		}
	}

	return (
		<Form onSubmit={handleSubmit}>
			<InputGroup>
				<Form.Control
					type="text"
					onChange={handleChange}
					placeholder="Enter city"
					aria-label="Enter city to search for current weather"
				/>

				<InputGroup.Append>
					<Button variant="primary" type="submit">
						Search
					</Button>
				</InputGroup.Append>
			</InputGroup>

			{!userLocation && city.length > 0 && city.length < 3 && (
				<Form.Text muted>Please enter at least three characters</Form.Text>
			)}
		</Form>
	)
}

export default SearchWeather
