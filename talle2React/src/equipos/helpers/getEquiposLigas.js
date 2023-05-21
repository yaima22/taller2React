import { equipos } from "../data/equipos"

export const getEquiposLigas = (liga = '') => {
 liga= liga.toLowerCase().trim()
 if(liga.length === 0)return []

 return equipos.filter(
    equipo => equipo.liga.toLowerCase().includes(liga))
 
}
