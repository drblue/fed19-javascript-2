import React from 'react';

const Navbar = ({ setPage }) => {
	return (
		<nav className="nav justify-content-center">
			<button onClick={() => setPage('planets')} className="nav-link btn btn-primary">Planets</button>
			<button onClick={() => setPage('vehicles')} className="nav-link btn btn-primary">Vehicles</button>
		</nav>
	);
}

export default Navbar;
