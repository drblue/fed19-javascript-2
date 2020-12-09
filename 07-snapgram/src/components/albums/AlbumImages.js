import React from 'react'

const AlbumImages = ({ images }) => {
	return (
		<div>
			This will show a grid of {images.length} images for this album.

			<ul>
				{images.length !== 0 && (
					images.map(image => (
						<li key={image.id}>{image.name}</li>
					))
				)}
			</ul>
		</div>
	)
}

export default AlbumImages
