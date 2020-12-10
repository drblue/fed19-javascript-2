import React from 'react'
import { useParams } from 'react-router-dom'
import ImagesGrid from './ImagesGrid'
import useAlbumImages from '../../hooks/useAlbumImages'
import UploadAlbumImage from './UploadAlbumImage'

const Album = () => {
	// query firestore for images with this albumId set as their album
	const { albumId } = useParams()
	const { images } = useAlbumImages(albumId)

	return (
		<>
			<h2 className="mb-3">Album {albumId}</h2>

			<UploadAlbumImage albumId={albumId} />

			<hr />

			<ImagesGrid images={images} />
		</>
	)
}

export default Album
