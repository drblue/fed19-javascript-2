import React from 'react';

const Navbar = ({ setPage }) => {
	return (
		<nav className="nav justify-content-center">
			<button onClick={() => setPage('profile')} className="nav-link btn btn-primary">Profile</button>
			<button onClick={() => setPage('repositories')} className="nav-link btn btn-primary">Repositories</button>
		</nav>
	);
}

export default Navbar;
