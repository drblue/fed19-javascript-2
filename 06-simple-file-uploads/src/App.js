import React, { useEffect, useState } from 'react';
import { db, storage } from './firebase';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './App.scss';
import CardImage from './components/CardImage';

const allowedFiletypes = ['image/gif', 'image/jpeg', 'image/png'];
const maxFileSize = 5;
const maxFileSizeInBytes = maxFileSize * 1024 * 1024;

function App() {
	const [file, setFile] = useState(null);
	const [images, setImages] = useState([]);
	const [alertMsg, setAlertMsg] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(null);

	useEffect(() => {
		getImages();
	}, []);

	const getImages = async () => {
		const imgs = [];

		const snapshot = await db.collection('images').get();
		snapshot.forEach(doc => {
			imgs.push({
				id: doc.id,
				...doc.data(),
			});
		});

		setImages(imgs);
	}

	const handleFileChange = e => {
		const selectedFile = e.target.files[0];

		if (selectedFile) {
			if (allowedFiletypes.includes(selectedFile.type) && selectedFile.size < maxFileSizeInBytes) {
				setFile(selectedFile);
				setAlertMsg(null);
			} else {
				setAlertMsg({
					type: 'warning',
					msg: `Please select a valid file (gif, jpg or png) with a maximum filesize of ${maxFileSize} mb.`,
				});
				setFile(null);
			}
		}
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (!file) {
			return;
		}

		// get root reference
		const storageRef = storage.ref();

		// create a reference based on the file's name
		const fileRef = storageRef.child(`images/${file.name}`);

		// put (upload) file to fileRef
		const uploadTask = fileRef.put(file);

		// attach listener for `state_changed`-event
		uploadTask.on('state_changed', taskSnapshot => {
			setUploadProgress(Math.round((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100));
		});

		// are we there yet?
		uploadTask.then(snapshot => {
			// let user know we're done
			setAlertMsg({
				type: "success",
				msg: "Image successfully uploaded",
			});
			setFile(null);
			setUploadProgress(null);

			// retrieve URL to uploaded file
			snapshot.ref.getDownloadURL().then(url => {
				// add uploaded file to db
				db.collection('images').add({
					name: file.name,
					path: snapshot.ref.fullPath,
					size: file.size,
					type: file.type,
					url,
				}).then(() => {
					// file has been added to db, refresh list of files
					getImages();
				});
			});
		}).catch(error => {
			console.error("File upload triggered an error!", error);
			setAlertMsg({
				type: "warning",
				msg: `Image could not be uploaded due to an error (${error.code})`
			});
		});
	}

	const handleReset = e => {
		setFile(null);
		setAlertMsg(null);
		setUploadProgress(null);
	}

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


			<Form onSubmit={handleSubmit} onReset={handleReset}>
				<h2>Upload a new image</h2>

				<Form.Group>
					<Form.File
						id="upload-image"
						label="Choose image to upload"
						custom
						onChange={handleFileChange}
					/>
				</Form.Group>

				<div className="mb-2">
					{
						file
							? `${file.name} (${Math.round(file.size/1024)} kb)`
							: "No image selected."
					}
				</div>

				{
					uploadProgress !== null && (
						<ProgressBar animated variant="success" now={uploadProgress} className="mb-3" />
					)
				}

				{
					alertMsg && (<Alert variant={alertMsg.type} className="my-3">{alertMsg.msg}</Alert>)
				}

				<div>
					<Button variant="primary" type="submit">Upload</Button>
					<Button variant="secondary" type="reset">Clear</Button>
				</div>
			</Form>
		</Container>
	);
}

export default App;
