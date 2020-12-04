import React, { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useUploadImage from '../hooks/useUploadImage';

const allowedFiletypes = ['image/gif', 'image/jpeg', 'image/png'];
const maxFileSize = 5;
const maxFileSizeInBytes = maxFileSize * 1024 * 1024;

const UploadImage = () => {
	const [file, setFile] = useState(null);
	const [uploadFile, setUploadFile] = useState(null);
	const [alertMsg, setAlertMsg] = useState(null);
	const { uploadProgress, error, isSuccess } = useUploadImage(uploadFile);

	useEffect(() => {
		if (error) {
			setAlertMsg(error);
		} else if (isSuccess) {
			setAlertMsg({
				type: 'success',
				msg: 'Image succesfully uploaded.',
			});
			setFile(null);
			setUploadFile(null);
		}
	}, [isSuccess, error]);

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

		setUploadFile(file);
	}

	const handleReset = e => {
		setAlertMsg(null);
		setFile(null);
		setUploadFile(null);
	}

	return (
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
	)
}

export default UploadImage
