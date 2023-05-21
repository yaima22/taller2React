import { Route, Routes } from 'react-router-dom'
import { EquiposRoutes } from '../equipos'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="/*"  element={<EquiposRoutes />} />
        
    </Routes>
    </>
  )
}
