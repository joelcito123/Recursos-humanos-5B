import React from 'react'
import ReactDOM from 'react-dom/client'
import Contenedor from './components/Contenedor'
import '../public/styles/bootstrap.min.css'
import '../public/styles/normalize.min.css'
import '../public/styles/style.css'
import '../public/styles/font-awesome.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contenedor />
  </React.StrictMode>,
)
