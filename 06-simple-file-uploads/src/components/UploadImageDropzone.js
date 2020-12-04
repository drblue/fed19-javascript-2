import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useUploadImage from '../hooks/useUploadImage';

const UploadImageDropzone = () => {

	const onDrop = useCallback(acceptedFiles => {
		console.log("Got me zum files 🗃🥳:", acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive, acceptedFiles, isDragAccept, isDragReject } = useDropzone({
		accept: 'image/gif, image/jpeg, image/png',
		onDrop
	});

	return (
		<div {...getRootProps()} id="upload-image-dropzone-wrapper" className={`text-center px-4 py-3 my-3 ${isDragAccept ? `drag-accept`: ``} ${isDragReject ? `drag-reject`: ``}`}>
			<input {...getInputProps()} />
			{
				isDragActive
					? isDragAccept ? <p>Drop it! 🔫</p> : <p>We don't want that file! 😨</p>
					: <p>Give me some files 😋!</p>
			}
			{acceptedFiles && (
				<div className="accepted-files mt-2">
					<ul className="list-unstyled">
						{acceptedFiles.map(file => (
							<li key={file.name}>{file.name} ({Math.round(file.size / 1024)} kb)</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default UploadImageDropzone
