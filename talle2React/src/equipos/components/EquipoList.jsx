import { getEquipos } from "../helpers"
import { EquipoCard } from "./EquipoCard"
export const EquipoList = () => {
    const equipo = getEquipos()
    return (
    
    <>
 <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                equipo.map(equipo =>(
                  
                    <EquipoCard key={equipo.id}
                    {...equipo}
                    />
                  ))
            }
        </div>


    </>
  )
}
