import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../../contexts/ThemeContextProvider';
import useAuth from '../../hooks/useAuth';
import useProducts from '../../hooks/useProducts';

const Navbar = () => {
	const { isThemeLight, toggleTheme } = useContext(ThemeContext);
	const { isAuthenticated } = useAuth();
	const { data } = useProducts();

	return (
		<nav className="navbar navbar-expand navbar-dark bg-dark">
			<div className="container">
				<Link to={`/`} className="navbar-brand"><span role="img" aria-label="a chocolate bar">🍫</span> GodisKväll</Link>

				<div className="navbar-collapse">
					<ul className="navbar-nav ml-auto">
						<li className="nav-item">
							<NavLink to={`/products/`} className="nav-link">
								{data && data.length ? `${data.length} produkter` : `Produkter`}
							</NavLink>
						</li>

						<li className="nav-item">
							{ isAuthenticated() && (
								<NavLink to={`/products/create`} className="nav-link">Ny produkt</NavLink>
							)}
						</li>

						<li className="nav-item">
							{ isAuthenticated() ? (
								<NavLink to={`/logout/`} className="nav-link">Logout</NavLink>
							) : (
								<NavLink to={`/login/`} className="nav-link">Login</NavLink>
							)}
						</li>

						<li className="nav-item">
							<button onClick={() => toggleTheme()} className="nav-link btn-change-theme" aria-label="Change color-theme of site">
								{
									isThemeLight()
										? (<FontAwesomeIcon icon={faMoon} />)
										: (<FontAwesomeIcon icon={faSun} />)
								}
							</button>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
