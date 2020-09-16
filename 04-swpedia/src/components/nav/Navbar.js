import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../contexts/ThemeContextProvider';

const Navbar = () => {
	const { isThemeLight, toggleTheme } = useContext(ThemeContext);

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container">
				<Link to={`/`} className="navbar-brand"><span role="img" aria-label="alien monster">👾</span> StarWarsPedia</Link>

				<div className="navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink to={`/films?page=1`} className="nav-link">Films</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={`/people?page=1`} className="nav-link">People</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={`/planets?page=1`} className="nav-link">Planets</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={`/starships?page=1`} className="nav-link">Starships</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={`/species?page=1`} className="nav-link">Species</NavLink>
						</li>
						<li className="nav-item">
							<NavLink to={`/vehicles?page=1`} className="nav-link">Vehicles</NavLink>
						</li>
						<li className="nav-item">
							<a href="#" onClick={() => toggleTheme()} className="nav-link">
								{
									isThemeLight()
										? (<FontAwesomeIcon icon={faMoon} />)
										: (<FontAwesomeIcon icon={faSun} />)
								}
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
