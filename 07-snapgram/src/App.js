import React from 'react'
import { Container } from 'react-bootstrap'
import Navigation from './components/Navigation'
import './assets/scss/app.scss'

const App = () => {
	return (
		<>
			<Navigation />

			<Container>
				Here be content.
			</Container>
		</>
	)
}

export default App
