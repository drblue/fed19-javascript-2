import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const Albums = () => {
	const { currentUser } = useAuth()

	// query firestore for all available albums

	return (
		<>
			<div>
				This will show all albums.
			</div>
			{currentUser && (
				<div>
					<Link to="/albums/create">Create a new Album</Link>
				</div>
			)}
		</>
	)
}

export default Albums
