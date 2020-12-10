import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BounceLoader } from 'react-spinners'
import PhotoPlaceholder from '../../assets/images/photo-placeholder.png'
import { useAuth } from '../../contexts/AuthContext'
import useAlbums from '../../hooks/useAlbums'

const Albums = () => {
	const { currentUser } = useAuth()
	const { albums, loading } = useAlbums()

	return (
		<>
			<h2 className="mb-3">All Albums</h2>

			{loading && (<BounceLoader color={"#888"} size={20} />)}

			{!loading && (
				<Row>
					{albums.map(album => (
						<Col sm={6} md={4} lg={3} key={album.id}>
							<Card className="mb-3">
							<Link to={`/albums/${album.id}`}>
								<Card.Img variant="top" src={PhotoPlaceholder} title={album.title} />
							</Link>
								<Card.Body>
									<Card.Title className="mb-0">
										<Link to={`/albums/${album.id}`}>{album.title}</Link>
									</Card.Title>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>
			)}

			{currentUser && (
				<div className="mt-3">
					<Link to="/albums/create" className="btn btn-primary">Create a new Album</Link>
				</div>
			)}
		</>
	)
}

export default Albums
