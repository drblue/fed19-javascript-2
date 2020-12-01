import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import './App.scss';

function App() {
	return (
		<Container>
			<Alert variant="info" className="my-5">This is a purely informational alert.</Alert>

			<header className="App-header">
				<h1>Simple File Uploads</h1>
			</header>
		</Container>
	);
}

export default App;
