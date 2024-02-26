import React from 'react'
import ReactDOM from 'react-dom/client'
import Contenedor from './components/Contenedor'
import ListaProfesiones from './components/ListaProfesiones'
import "./assets/styles/main.css"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SeccionAcceso from './components/SeccionAcceso'
import BarraLateral from './components/BarraLateral'
import SeccionContacto from './components/SeccionContacto'
import SeccionEmpresas from './components/SeccionEmpresas'
import SeccionAspirantes from './components/SeccionAspirantes'
import ErrorPage from './Errorpage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Contenedor />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/profesiones",
    element: <ListaProfesiones />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/contacto",
    element: <SeccionContacto />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/empresas",
    element: <SeccionEmpresas />,
    errorElement: <ErrorPage/>
  },
  {
    path: "/aspirantes",
    element: <SeccionAspirantes/>,
    errorElement: <ErrorPage/>
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
