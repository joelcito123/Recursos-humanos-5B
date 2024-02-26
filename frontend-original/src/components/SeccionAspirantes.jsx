import { useState, useEffect } from 'react'
import AspirantesBio from './AspirantesBio'

function SeccionAspirantes() { 
    const [datosAspirantes, setDatosAspirantes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3080/api/aspirantes')
            .then(respuesta => {
                return respuesta.json();
            })
            .then(aspirantes => (
                setDatosAspirantes(aspirantes.data)
            ))

    }, []);

    

    return (
        <section className="content aspirantes">
            <h2>Aspirantes</h2>
            <article className="person-boxes">
                {/* datos de los aspirantes */}
                 {datosAspirantes.map((aspirante, i) => {
                    return < AspirantesBio {...aspirante} key={i}/>
                })}
                {/* datos de los aspirantes */}
            </article>
        </section>
    )
}

export default SeccionAspirantes;