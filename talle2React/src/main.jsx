import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { EquiposApp } from './EquiposApp'
import { Buscar } from './equipos/pages'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <EquiposApp />
    </BrowserRouter>
  </React.StrictMode>,
)
