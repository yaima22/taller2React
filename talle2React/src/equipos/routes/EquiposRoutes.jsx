import { Navbar } from "../../ui"
import{Navigate, Route, Routes} from 'react-router-dom'
import { Equipos, Buscar } from '../pages'
export const EquiposRoutes = () => {
  return (
    <>
     < Navbar />
     
      <Routes>
        
      <Route path="/" element={<Equipos />}/>
      <Route path="/Buscar" element={<Buscar />}/>

        <Route path="/" element={<Navigate to="/Equipos" />}/>
      </Routes>
    </>
  )
}
