import React, { useState } from 'react';
import { storage } from './firebase';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import './App.scss';

function App() {
	const [image, setImage] = useState(null);
	const [alertMsg, setAlertMsg] = useState(null);
	const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
	const [uploadProgress, setUploadProgress] = useState(null);

	const handleFileChange = e => {
		if (e.target.files[0]) {
			setImage(e.target.files[0]);
		}
		console.log("File changed!", e.target.files);
	}

	const handleSubmit = e => {
		e.preventDefault();

		if (!image) {
			return;
		}

		// get root reference
		const storageRef = storage.ref();

		// create a reference based on the file's name
		const fileRef = storageRef.child(image.name);

		// put (upload) image to fileRef
		const uploadTask = fileRef.put(image);

		// attach listener for `state_changed`-event
		uploadTask.on('state_changed', taskSnapshot => {
			setUploadProgress((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100);
			// console.log(`Transfered ${taskSnapshot.bytesTransferred} bytes out of ${taskSnapshot.totalBytes} which is ${progress} %.`);
		});

		// are we there yet?
		uploadTask.then(snapshot => {
			console.log("File has been uploaded!", snapshot);

			// let user know we're done
			setAlertMsg({
				type: "success",
				msg: "Image successfully uploaded",
			});

			// retrieve URL to uploaded file
			snapshot.ref.getDownloadURL().then(url => {
				setUploadedImageUrl(url);
			});

		}).catch(error => {
			console.error("File upload triggered an error!", error);
			setAlertMsg({
				type: "warning",
				msg: `Image could not be uploaded due to an error (${error.code})`
			});
		});

		console.log("uploadTask:", uploadTask);
	}

	const handleReset = e => {
		setImage(null);
		setAlertMsg(null);
		setUploadProgress(null);
		setUploadedImageUrl(null);
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

				{uploadProgress && (<p>{Math.round(uploadProgress)}%</p>)}

				{
					alertMsg && (<Alert variant={alertMsg.type} className="my-3">{alertMsg.msg}</Alert>)
				}

				{
					uploadedImageUrl && (<img src={uploadedImageUrl} className="img-fluid my-3" alt="uploaded file" />)
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
