import { faComment, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { getAspirantes } from '../api/api';


const Aspirantes = () => {
    const [aspirantes, setAspirantes] = useState([])

    useEffect(()=>{
        getAspirantes().then(result => setAspirantes(result.data.payload));
    }, [])

    return (
        <section className="content aspirantes">
            <h2>Aspirantes</h2>
            <article className="person-boxes">
                {aspirantes.map(aspirante => (
                    <div key={aspirante.id} className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                        <div className="box-avatar">
                            <img src={`http://localhost:3000/public/foto${aspirante.imagen}`} alt={aspirante.nombre} />
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