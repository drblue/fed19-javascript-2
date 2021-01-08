import React from 'react'
import { Card, Col } from 'react-bootstrap'

const PlaylistCard = ({ playlist }) => {
	return (
		<Col sm={6} md={4} lg={3}>
			<Card className="playlist-card mb-3">
				<a href={playlist.link} target="_blank" rel="noopener noreferrer">
					<Card.Img variant="top" src={playlist.cover} title={playlist.title} />
				</a>
				<Card.Body>
					<Card.Title>
						<a href={playlist.link} target="_blank" rel="noopener noreferrer">{playlist.title}</a>
					</Card.Title>

					<Card.Text>
						{playlist.nb_tracks} tracks by {playlist.username}
					</Card.Text>
				</Card.Body>
			</Card>
		</Col>
	)
}

export default PlaylistCard
