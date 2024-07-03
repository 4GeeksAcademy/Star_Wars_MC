import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const Details = () => {

  const { actions, store } = useContext(Context)
  const params = useParams()
  useEffect(() => {
    actions.getHero(params.id)
  }, [])
  console.log(store.hero)
  return (
    <div className="container">
      <div className="row bg-dark text-warning">
        <img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
          src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"}
          alt={store.hero.properties?.name} />
        <div className="col-6 media-body">
          <h5 className="mt-0">{store.hero.properties?.name}</h5>
          <h6>{store.hero.description}</h6>
        </div>
      </div>
      <hr className="line" />
      <div className="bg-dark">
        <ul className="row list-group-horizontal mt-3">
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Height:
            </div>
            {store.hero.properties?.height}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Mass:
            </div>
            {store.hero.properties?.mass}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Hair Color:
            </div>
            {store.hero.properties?.hair_color}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Skin Color:
            </div>
            {store.hero.properties?.skin_color}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Eye Color:
            </div>
            {store.hero.properties?.eye_color}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Gender:
            </div>
            {store.hero.properties?.gender}
          </li>
        </ul>
      </div>
    </div>
  )
}