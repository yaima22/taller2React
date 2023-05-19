import { equipos } from "../data/equipos"

export const getEquiposLigas = (id) => {
 return equipos.filter(equipo => equipo.liga === id)
 
}
