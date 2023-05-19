import { EquipoListLigas } from "../components"

export const Buscar = () => {
  var busqueda = "Española"
 
  return (
    <>
     <h1>Filtra los Equipos por Pais</h1>
     <hr />
     <h4>Ingresa el nombre de el Equipo</h4>
     <hr />
    
          <input
            id="liga"
            type="text"
            placeholder="search a hero"
            className="form.control"
            name="searchText"
            autoComplete="false"
          />
          <button className="btn btn-outline-dark mt-2" onClick={() =>{
         busqueda = "Española"
         
          }}
          
          >Search</button>
       
        <hr />
      <EquipoListLigas  liga={busqueda}/>
          
    </>
  )
  
}

export default  Buscar
