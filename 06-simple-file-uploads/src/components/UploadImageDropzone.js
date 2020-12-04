import React, { useState, useEffect, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import useUploadImage from '../hooks/useUploadImage';

const UploadImageDropzone = () => {
	const onDrop = useCallback(acceptedFiles => {
		console.log("Got me zum files 🗃🥳:", acceptedFiles);
	}, []);
	const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

	return (
		<div {...getRootProps()} id="upload-image-dropzone-wrapper" className="text-center px-4 py-3 my-3">
			<input {...getInputProps()} />
			{
				isDragActive
					? <img src="/assets/images/drop.gif" className="img-fluid" alt="Drop it! 🔫" />
					: <p>Give me some files 😋!</p>
			}
		</div>
	)
}

export default UploadImageDropzone
