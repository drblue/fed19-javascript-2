import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.scss';
import CardImage from './components/CardImage';
import UploadImageDropzone from './components/UploadImageDropzone';
import useImages from './hooks/useImages';

function App() {
	const { images } = useImages();

	return (
		<>
			<Container className="py-3 mb-5">
				<header className="App-header mb-4">
					<h1>Simple File Uploads</h1>
				</header>

				<hr />

				<UploadImageDropzone />

				<hr />

				<Row className="mb-5">
					{
						images.map(image => (
							<CardImage image={image} key={image.id} />
						))
					}
				</Row>
			</Container>

			<footer className="bg-dark text-white text-center py-3">
				<span className="text-muted text-small">Simple File Uploader</span>
			</footer>
		</>
	);
}

export default App;
