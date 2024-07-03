import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext"
import { Link } from "react-router-dom";

export const CharactersCard = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getCharacters()
    }, [])
    return (
        <div className="my-3">
            <h1 className="text-warning pt-3">
                <i className="fa-solid fa-jedi"></i>
                Characters
            </h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.characters.map((item, id) => (
                    <div className="card bg-dark text-light"
                        key={id}
                        style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        <img className="card-img-top"
                            src={"https://starwars-visualguide.com/assets/img/characters/" + (id + 1) + ".jpg"}
                            alt={item.name} />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to={`/details/${id + 1}`} className="btn btn-info">Learn More</Link>
                            <div className="btn btn-outline-info float-end"
                                onClick={() => actions.favorites(item.name)}
                            >
                                <i className="fa-regular fa-heart" style={{ color: "#FFD43B" }}></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}