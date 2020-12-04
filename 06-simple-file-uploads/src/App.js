import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.scss';
import CardImage from './components/CardImage';
import UploadImage from './components/UploadImage';
import useImages from './hooks/useImages';

function App() {
	const { images } = useImages();

	return (
		<Container>
			<header className="App-header mb-4">
				<h1>Simple File Uploads</h1>
			</header>

			<Row className="mb-5">
				{
					images.map(image => (
						<CardImage image={image} key={image.id} />
					))
				}
			</Row>

			<hr />

			<UploadImage />

		</Container>
	);
}

export default App;
