import { useEffect, useState } from 'react'

const useCurrentLocation = () => {
	const [error, setError] = useState(null)
	const [location, setLocation] = useState(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const positionOptions = {
			timeout: 10 * 1000, // 10 seconds
			maximumAge: 2 * 60 * 60 * 1000, // 2 hours
		}

		// We gots ourselves a current user position
		const handleSuccess = position => {
			const { latitude, longitude } = position.coords

			setLocation({
				latitude,
				longitude,
			})
			setLoading(false)
		}

		// Something went wrong. Might be a timeout, or the user denied our
		// request for their current position
		const handleError = error => {
			console.log('Ooops, could not get a position:', error);
			setError(error.message)
			setLoading(false)
		}

		navigator.geolocation.getCurrentPosition(handleSuccess, handleError, positionOptions)
	}, [])

	return { error, location, loading }
}

export default useCurrentLocation
