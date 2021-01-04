import React, { useState, useEffect, useRef } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import MoonLoader from 'react-spinners/MoonLoader'
import useCurrentLocation from '../hooks/useCurrentLocation'

const SearchWeather = ({ onSearchWeather }) => {
	const [city, setCity] = useState("")
	const userLocation = useRef()
	const { location, loading } = useCurrentLocation()

	useEffect(() => {
		if (location && !userLocation.current) {
			userLocation.current = location
			onSearchWeather(location)
		}
	}, [onSearchWeather, location])

	const handleChange = (e) => {
		setCity(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		if (city.length < 3) {
			return;
		}

		// let parent know we want to search for weather in `city`
		if (city) {
			onSearchWeather({ city })
		}
	}

	if (loading) {
		return (
			<div className="d-flex">
				<MoonLoader size={60} color={'#aaa'} />
			</div>
		)
	}

	return location ? (
			<div className="text-center">
				Found you! Lat: {location.latitude}, lng: {location.longitude}
			</div>
		) : (
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

				{city.length > 0 && city.length < 3 && (
					<Form.Text muted>Please enter at least three characters</Form.Text>
				)}
			</Form>
		)
}

export default SearchWeather
