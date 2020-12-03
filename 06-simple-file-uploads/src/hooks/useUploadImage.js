import { useState, useEffect } from 'react';
import { db, storage } from '../firebase';

const useUploadImage = (file) => {
	const [uploadProgress, setUploadProgress] = useState(null);
	const [uploadedImage, setUploadedImage] = useState(null);
	const [status, setStatus] = useState(null);
	const [isError, setIsError] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);

	useEffect(() => {
		if (!file) {
			setUploadProgress(null);
			setUploadedImage(null);
			setStatus(null);
			setIsError(false);
			setIsSuccess(false);

			return;
		}

		// get file reference
		const fileRef = storage.ref(`images/${file.name}`);

		// upload file to fileRef
		const uploadTask = fileRef.put(file);

		// attach listener for `state_changed`-event
		uploadTask.on('state_changed', taskSnapshot => {
			setUploadProgress(Math.round((taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100));
		});

		// are we there yet?
		uploadTask.then(snapshot => {
			// let user know we're done
			setStatus({
				type: "success",
				msg: "Image successfully uploaded",
			});
			setUploadProgress(null);

			// retrieve URL to uploaded file
			snapshot.ref.getDownloadURL().then(url => {
				// add uploaded file to db
				const image = {
					name: file.name,
					path: snapshot.ref.fullPath,
					size: file.size,
					type: file.type,
					url,
				};

				db.collection('images').add(image).then(() => {
					// file has been added to db, refresh list of files
					setUploadedImage(image);
					setIsSuccess(true);
				});
			});
		}).catch(error => {
			console.error("File upload triggered an error!", error);
			setIsError(true);
			setStatus({
				type: "warning",
				msg: `Image could not be uploaded due to an error (${error.code})`
			});
		});
	}, [file]);

	return { uploadProgress, uploadedImage, status, isError, isSuccess };
}

export default useUploadImage;
