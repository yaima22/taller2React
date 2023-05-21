import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string'
import {useForm} from './../../hooks/useForm'
import { getEquiposLigas } from "../helpers";
import { EquipoCard } from "../components";

export const Buscar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {q = ''} = queryString.parse(location.search)

  const equipo =getEquiposLigas(q)
  console.log(equipo)

//Validacion
  const showSearch = (q.length === 0)
  const showError = (q.length > 0)&& equipo.length

  //
  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (event) =>{
    event.preventDefault();
    //if(searchText.trim().lenght <= 1) return navigate(`?q=${ searchText }`)
    navigate(`?q=${ searchText }`)
  }

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={ onSearchSubmit }>
            <input type="text" 
                  placeholder="Search a Hero"
                  className="form-control"
                  name="searchText" 
                  autoComplete="false"
                  value={searchText} 
                  onChange={ onInputChange }
            />
            <button className="btn btn-outline-dark mt-2">
              Search
            </button>
          </form>

          </div>
          <div className="col-7">
          <h4>Results</h4>
          <hr />
          {/* {
            ( q === '' )
            ? <div className="alert alert-primary"> search a hero </div>
            : ( heroes.length === 0 ) 
              && <div className="alert alert-danger">Hero by <b> { q } </b> no exists </div>
          } */}
          <div className="alert alert-danger animate__animated animate__fadeInUp" 
                style={{ display: showSearch ? '' : 'none' }}>
              Error
            </div>

            <div className="alert alert-primary animate__animated animate__fadeInUp" 
                style={{ display: showError ? '' : 'none' }}>
              Equipo Encontrado <b>{ q }</b>
            </div>
          
          
          
          <div className="row rows-cols-1 row-cols-md-2 g-2">
          {
            equipo.map(equipo =>(
                <EquipoCard key={equipo.id} {...equipo}/>
            ))
          
          }

          </div>

        </div>
          </div>
        
         
    </>
  )
  
}


