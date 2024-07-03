import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const PlanetsCard = () => {
    const { actions, store } = useContext(Context)
    useEffect(() => {
        actions.getPlanets()
    }, [])
    return (
        <div className="my-3">
            <h1 className="text-warning pt-3">
                <i className="fa-solid fa-book-journal-whills"></i>
                Planets
            </h1>
            <div className="d-flex flex-row overflow-scroll">
                {store.planets.map((item, id) => (
                    <div className="card bg-dark text-light"
                        key={id}
                        style={{ width: "18rem", flex: "none", margin: "10px" }}>
                        {id === 0 ?
                            <img className="card-img-top"
                                src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"}
                                alt={item.name} />
                            :
                            <img className="card-img-top" src={"https://starwars-visualguide.com/assets/img/planets/" + (id + 1) + ".jpg"}
                                alt={item.name} />
                        }
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <Link to={"/planetdetails/" + (id + 1)} className="btn btn-info">Learn More</Link>
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