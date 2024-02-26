import { faComment, faEnvelope, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function AspirantesBio(props) {
    return (

        <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">

            <div className="box-avatar">
                <img src={`http://localhost:3080/uploads/imagen${props.imagen}`} alt="imagen aspirante" />
            </div>
            <div className="box-bio">
                <h2 className="bio-name">{props.nombre} {props.apellido}</h2>
                <p className="bio-position">{props.profesiones.nombre}</p>
            </div>

            <div className="box-actions">
                <button>
                    <FontAwesomeIcon icon={faStar} className="bi bi-star" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faComment} className="bi bi-chat" />
                </button>
                <button>
                    <FontAwesomeIcon icon={faEnvelope} className="bi bi-envelope" />
                </button>
            </div>
        </div>

    )
}

export default AspirantesBio;