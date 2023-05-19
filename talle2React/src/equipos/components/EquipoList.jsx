import { getEquipos } from "../helpers"

export const EquipoList = () => {
    const equipo = getEquipos()
    return (
    
    <>
 <div className='row rows-cols-1 row-cols-md-3 g-3'>
            {
                equipo.map(hero =>(
                    console.log(hero.liga)
                ))
            }
        </div>


    </>
  )
}
