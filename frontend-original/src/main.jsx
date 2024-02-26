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
import SeccionAspirantes from './components/SeccionAspirantes'
import SeccionPostulate from './components/SeccionPostulate'
import BusquedaSeleccion from './components/BusquedaSeleccion'
import Error404 from './components/Error404'

const router = createBrowserRouter([
  {
    path: "/",
    element: <BusquedaSeleccion />,
    errorElement: <Error404 />
  },
  {
    path: "/profesiones",
    element: <ListaProfesiones />,
    errorElement: <Error404 />
  },
  {
    path: "/contacto",
    element: <SeccionContacto />,
    errorElement: <Error404 />
  },
  {
    path: "/empresas",
    element: <SeccionEmpresas />,
    errorElement: <Error404 />
  },
  {
    path: "/aspirantes",
    element: <SeccionAspirantes/>,
    errorElement: <Error404 />
  },
  {
    path: "/postulate",
    element: <SeccionPostulate />,
    errorElement: <Error404 />
  },
  {
    path: "/felicidades",
    element: <h1>Te Postulaste!!!</h1>
  }
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
