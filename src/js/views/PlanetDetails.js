import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const PlanetDetails = () => {

  const { actions, store } = useContext(Context)
  const params = useParams()
  useEffect(() => {
    actions.getPlanet(params.id)
  }, [])
  console.log(store.planet)
  return (
    <div className="container">
      <div className="row bg-dark text-warning">
        {params.id == 1 ?
          <img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
            src="https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"
            alt={store.planet.properties?.name} />
          :
          <img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
            src={"https://starwars-visualguide.com/assets/img/planets/" + (params.id) + ".jpg"}
            alt={store.planet.properties?.name} />
        }
        <div className="col-6 media-body">
          <h5 className="mt-0">{store.planet.properties?.name}</h5>
          <h6>{store.planet.description}</h6>
        </div>
      </div>
      <hr className="line" />
      <div className="bg-dark">
        <ul className="row list-group-horizontal mt-3">
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Diameter:
            </div>
            {store.planet.properties?.diameter}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Gravity:
            </div>
            {store.planet.properties?.gravity}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Climate:
            </div>
            {store.planet.properties?.climate}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Population:
            </div>
            {store.planet.properties?.population}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Terrain:
            </div>
            {store.planet.properties?.terrain}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Surface Water:
            </div>
            {store.planet.properties?.surface_water}
          </li>
        </ul>
      </div>
    </div>
  )
}

//   item.height,
//   item.mass,
//   item.hair_color,
//   item.skin_color,
//   item.eye_color
//   item.gender, 
// )}