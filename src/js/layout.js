import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Blog } from "./views/Blog.jsx";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import { Details } from "./views/Details.jsx";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { PlanetDetails } from "./views/PlanetDetails.jsx";
import { SpecimenDetails } from "./views/SpecimenDetails.jsx";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Blog />} />
						<Route path="/details/:id" element={<Details />} />
						<Route path="/planetdetails/:id" element={<PlanetDetails />} />
						<Route path="/specimendetails/:id" element={<SpecimenDetails />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
