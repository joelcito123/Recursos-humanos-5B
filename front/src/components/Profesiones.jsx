import { useEffect, useState } from "react";
import { getProfesiones } from "../api/api";

const Profesiones = () => {
  const [profesiones, setProfesiones] = useState([])

  useEffect(() => {
    getProfesiones().then(result => setProfesiones(result.data.payload))
   }, [])


  return (
    <section className="content profesiones" id="profesiones">
      <h2 className="mt-3">Profesiones</h2>
      <div className="list-group shadow-sm p-3 mb-5 rounded">
        <h4 className="list-group-item list-group-item-action active text-center"
          aria-current="true">
          Listado de Profesiones
        </h4>
        {profesiones.map(profesion => (
          <button key={profesion.id} type="button" className="list-group-item list-group-item-action text-center">
            {profesion.nombre}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Profesiones;
