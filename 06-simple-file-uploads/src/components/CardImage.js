import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const CardImage = ({ image }) => {
	return (
		<Col sm={6} md={4} lg={3}>
			<Card className="mb-3">
				<a href={image.url} title="View image in lightbox" data-attribute="SRL">
					<Card.Img variant="top" src={image.url} />
				</a>
				<Card.Body>
					<Card.Text>
						{image.name} ({Math.round(image.size/1024)} kb)
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	);
}

export default CardImage;
