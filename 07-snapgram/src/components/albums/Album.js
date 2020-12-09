import React from 'react'
import { useParams } from 'react-router-dom'
import AlbumImages from './AlbumImages'

const Album = () => {
	// query firestore for images with this albumId set as their album
	const { albumId } = useParams()

	return (
		<div>
			This will show all images in album with id <code>{albumId}</code>.

			<AlbumImages images={[]} />
		</div>
	)
}

export default Album
