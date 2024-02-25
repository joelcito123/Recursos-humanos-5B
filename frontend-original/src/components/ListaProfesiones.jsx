import { useState, useEffect } from 'react'

function ListaProfesiones() {

    const [nombreProfesiones, setNombreProfesiones] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3080/api/profesiones')
            .then(respuesta => {
                return respuesta.json();
            })
            .then(profesiones => (
                setNombreProfesiones(profesiones.data)
            ) );

    }, []);

    return (
        <section className="content profesiones">
            <h2 className="mt-3">Profesiones</h2>
            <div className="list-group shadow-sm p-3 mb-5 rounded">
                <h4
                    className="list-group-item list-group-item-action active text-center"
                    aria-current="true"
                >
                    Listado de Profesiones
                </h4>
                {nombreProfesiones.map((profesion, i) => (<button key={i} type="button"
                    className="list-group-item list-group-item-action text-center" >{profesion.nombre}</button>))}
            </div>
        </section>
    )
}

export default ListaProfesiones;