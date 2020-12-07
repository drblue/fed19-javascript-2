/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import logo from './assets/images/logo.svg'
import './assets/scss/app.scss'

const App = () => {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img
							alt="A photo album"
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
						/>{' '}
						Snapgram
					</Navbar.Brand>

					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="/albums">Albums</Nav.Link>
							<NavDropdown title="Username" id="basic-nav-dropdown">
								<NavDropdown.Item href="/my-profile">My profile</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/logout">Log Out</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Container>
				Here be content.
			</Container>
		</>
	)
}

export default App
