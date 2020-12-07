import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navigation from './components/Navigation'
import NotFound from './components/NotFound'
import Signup from './components/Signup'
import AuthContextProvider from './contexts/AuthContext'
import './assets/scss/app.scss'

const App = () => {
	return (
		<Router>
			<AuthContextProvider>
				<Navigation />

				<Container className="py-3">
					<Routes>

						<Route path="/">
							<Home />
						</Route>

						<Route path="/signup">
							<Signup />
						</Route>

						<Route path="*" element={<NotFound />} />

					</Routes>
				</Container>
			</AuthContextProvider>
		</Router>
	)
}

export default App
