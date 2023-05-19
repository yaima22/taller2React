import { Link } from "react-router-dom"
export const EquipoCard = ({
  id,
  equipo,
  liga,
  copas,
  nacimiento,
  url,

}) => {


  return (
    <>
<div className="col animate__animated animate__fadeInLeftBig">
  <div className="card">
    <div className="row no-gutters">
        <div className="col-4">
            <img src={url} className="card-img" alt="{superhero}" />
          </div>
          <div className="col-8">
          <h5 className="card-title"> { equipo }</h5>
          <p className="card-text">{ liga }</p>
          <p className="card-text">{ copas }</p>
          <p className="card-text">{  nacimiento }</p>
            </div>
    </div>
  </div>
</div>
    </>
  )
}
