import React, { useRef, useState } from 'react'
import { Row, Col, Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
	const emailRef = useRef()
	const passwordRef = useRef()
	const passwordConfirmRef = useRef()

	return (
		<>
			<Row>
				<Col md={{ span: 6, offset: 3 }}>
					<Card>
						<Card.Body>
							<Card.Title>Sign Up</Card.Title>

							<Form>

								<Form.Group id="email">
									<Form.Label>Email</Form.Label>
									<Form.Control type="email" ref={emailRef} required />
								</Form.Group>

								<Form.Group id="password">
									<Form.Label>Password</Form.Label>
									<Form.Control type="password" ref={passwordRef} required />
								</Form.Group>

								<Form.Group id="password-confirm">
									<Form.Label>Password Confirmation</Form.Label>
									<Form.Control type="password" ref={passwordConfirmRef} required />
								</Form.Group>

								<Button type="submit">Create Account</Button>

							</Form>
						</Card.Body>
					</Card>
					<div className="text-center mt-2">
						Already have an account? <Link to="/login">Log In</Link>
					</div>
				</Col>
			</Row>
		</>
	)
}

export default Signup
