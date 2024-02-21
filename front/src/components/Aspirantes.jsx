import { faComment, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import foto1 from '../assets/img/foto1.jpg'
import foto2 from '../assets/img/foto2.jpg'
import foto3 from '../assets/img/foto3.jpg'
import foto4 from '../assets/img/foto4.jpg'
import foto5 from '../assets/img/foto5.jpg'
import foto6 from '../assets/img/foto6.jpg'
import { useEffect } from 'react';
import { getAspirantes } from '../api/api';


const Aspirantes = () => {

    useEffect(()=>{
        getAspirantes().then(data => console.log(data));
    }, [])

    const aspirantes = [

        { id: 1, nombre: 'Gloria Medina', posicion: 'Administrador', imagen: foto1 },
        { id: 2, nombre: 'Daniel Fuentes', posicion: 'Técnico de sonido', imagen: foto2 },
        { id: 3, nombre: 'Tim Tim', posicion: 'Linguista', imagen: foto3 },
        { id: 4, nombre: 'Rocio Carle', posicion: 'Profesor', imagen: foto4 },
        { id: 5, nombre: 'Victor Fuentes', posicion: 'Computista', imagen: foto5 },
        { id: 6, nombre: 'Luis Fuentes', posicion: 'Economista', imagen: foto6 },
    ];
    return (
        <section className="content aspirantes">
            <h2>Aspirantes</h2>
            <article className="person-boxes">
                {aspirantes.map(aspirante => (
                    <div key={aspirante.id} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="box-avatar">
                            <img src={aspirante.imagen} alt={aspirante.nombre} />
                        </div>
                        <div className="box-bio">
                            <h2 className="bio-name">{aspirante.nombre}</h2>
                            <p className="bio-position">{aspirante.posicion}</p>
                        </div>
                        <div className="box-actions">
                            <button>
                                <FontAwesomeIcon icon={faStar} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faComment} />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faEnvelope} />
                            </button>
                        </div>
                    </div>
                ))}
            </article>
        </section>
    )
}

export default Aspirantes