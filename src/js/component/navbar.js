import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context)
	return (
		<nav className="navbar navbar-dark bg-dark mb-3 sticky-top">
			<div className="container">
				<Link to="/" className="mt-4">
					<span className="navbar-brand mb-0 h1">
						<i className="mr-3 text-light fa-brands fa-galactic-republic fa-xl"></i>
						<p className="text-light">
							STARWARS
						</p>
					</span>
				</Link>
				<div className="nav-item dropdown bg-info">
					<a className="nav-link dropdown-toggle text-dark"
						href="#" role="button"
						data-bs-toggle="dropdown"
						aria-expanded="false" >
						Favorites {store.favorites.length}</a>
					<ul className="dropdown-menu" >
						{store.favorites.map((item, id) => (
							<li key={id}>
								<a className="dropdown-item"
									onClick={() => actions.favorites(item)} >
									{item} <i className="fa fa-trash float-end"></i></a>
							</li>))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
