import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const SpecimenDetails = () => {

  const { actions, store } = useContext(Context)
  const params = useParams() //const {id} = useParams()
  useEffect(() => {
    actions.getSpecimen(params.id)
  }, [])
  console.log(store.specimen)
  return (
    <div className="container">
      <div className="row bg-dark text-warning">
        <img className="col-6 mr-3" style={{ height: "500px", width: "auto" }}
          src={"https://starwars-visualguide.com/assets/img/species/" + (params.id) + ".jpg"}
          alt={store.specimen.properties?.name} />
        <div className="col-6 media-body">
          <h5 className="mt-0">{store.specimen.properties?.name}</h5>
          <h6>{store.specimen.description}</h6>
        </div>
      </div>
      <hr className="line" />
      <div className="bg-dark">
        <ul className="row list-group-horizontal mt-3">
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Classification:
            </div>
            {store.specimen.properties?.classification}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Designation:
            </div>
            {store.specimen.properties?.designation}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Average LifeSpan:
            </div>
            {store.specimen.properties?.average_lifespan}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Language:
            </div>
            {store.specimen.properties?.language}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Hair Colors:
            </div>
            {store.specimen.properties?.hair_colors}
          </li>
          <li className="col-2 list-group-item bg-dark text-warning">
            <div>
              Eye Colors:
            </div>
            {store.specimen.properties?.eye_colors}
          </li>
        </ul>
      </div>
    </div>
  )
}