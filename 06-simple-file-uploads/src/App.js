import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.scss';

function App() {
	const [image, setImage] = useState(null);

	const handleFileChange = e => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
		console.log("File changed!", e.target.files[0]);
	}

	const handleSubmit = e => {
		e.preventDefault();

		console.log("Would upload file to storage");
	}

	const handleReset = e => {
		setImage(null);
	}

	return (
		<Container>
			<header className="App-header mb-4">
				<h1>Simple File Uploads</h1>
			</header>

			<Form onSubmit={handleSubmit} onReset={handleReset}>
				<Form.Group>
					<Form.File
						id="upload-image"
						label="Choose image to upload"
						custom
						onChange={handleFileChange}
					/>
				</Form.Group>

				<div className="mb-3">
					{
						image
							? `${image.name} (${Math.round(image.size/1024)} kb)`
							: "No image selected."
					}
				</div>

				<Button variant="primary" type="submit">Upload</Button>
				<Button variant="secondary" type="reset">Clear</Button>
			</Form>
		</Container>
	);
}

export default App;
