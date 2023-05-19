import { getEquipos } from "../helpers"
import { EquipoList } from "../components"

export const Equipos = () => {
  const equipo = getEquipos()
  return (
    
    <>
     <h1>Lista de Equipos</h1>
    <EquipoList/>
    </>
    
  )
}
export default Equipos
