import { getEquiposLigas } from "../helpers"
import { EquipoCard } from "./EquipoCard"

export const EquipoListLigas = ({liga}) => {
    const equipo = getEquiposLigas(liga)
    
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
