import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import useDeleteImage from '../hooks/useDeleteImage';

const CardImage = ({ image }) => {
	const [deleteImage, setDeleteImage] = useState(null);
	useDeleteImage(deleteImage);

	const handleDeleteImage = () => {
		// eslint-disable-next-line no-restricted-globals
		if (confirm(`Are you really sure you want to delete the image\n"${image.name}"?`)) {
			setDeleteImage(image);
		}
	}

	return (
		<Col sm={6} md={4} lg={3}>
			<Card className="mb-3">
				<a href={image.url} title="View image in lightbox" data-attribute="SRL">
					<Card.Img variant="top" src={image.url} />
				</a>
				<Card.Body>
					<Card.Text className="text-muted small">
						{image.name} ({Math.round(image.size/1024)} kb)
					</Card.Text>
					<Button variant="danger" size="sm" onClick={handleDeleteImage}>Delete</Button>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardImage;
