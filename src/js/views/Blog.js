import React from "react";
import { CharactersCard } from "../component/CharactersCard.jsx";
import { PlanetsCard } from "../component/PlanetsCard.jsx";
import { Species, } from "../component/Species.jsx";
import "../../styles/home.css";

export const Blog = () => {
	return (
		<div className="container bg-dark ">
			<CharactersCard />
			<PlanetsCard />
			<Species />
		</div>

	)
};