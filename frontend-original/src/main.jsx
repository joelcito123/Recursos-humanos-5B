import React from 'react'
import ReactDOM from 'react-dom/client'

import "./assets/styles/main.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Componentes

import ListaProfesiones from './components/ListaProfesiones'
import SeccionAcceso from './components/SeccionAcceso'
import BarraLateral from './components/BarraLateral'
import SeccionContacto from './components/SeccionContacto'
import SeccionEmpresas from './components/SeccionEmpresas'
import SeccionPostulate from './components/SeccionPostulate'
import BusquedaSeleccion from './components/BusquedaSeleccion'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BusquedaSeleccion />,
  },
  {
    path: "/profesiones",
    element: <ListaProfesiones />
  },
  {
    path: "/contacto",
    element: <SeccionContacto />
  },
  {
    path: "/empresas",
    element: <SeccionEmpresas />
  },
  {
    path: "/postulate",
    element: <SeccionPostulate />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="dashboard">
      <SeccionAcceso />
      <RouterProvider router={router} />
      <BarraLateral />
    </div>
  </React.StrictMode>,
)
