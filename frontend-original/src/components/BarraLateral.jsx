import { faAddressCard, faBuilding, faList, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../assets/images/logo-dh.png";

function BarraLateral({ menuExist }) {
    let opciones = [
        { nombre: "Empresas", icon: faBuilding, link: "/empresas", clase: "bi bi-building" },
        { nombre: "Aspirantes", icon: faUser, link: "/aspirantes", clase: "bi bi-person" },
        { nombre: "Profesiones", icon: faList, link: "/profesiones", clase: "bi bi-list-check" },
        { nombre: "Postulate aquí", icon: faAddressCard, link: "/postulate", clase: "bi bi-person-vcard" },
        { nombre: "Contacto", icon: faMessage, link: "/contacto", clase: "bi bi-chat-left-text" },
    ]


    return (
        <header className={`menu-wrap ${menuExist ? 'oculto' : ''}`}>
            <a href="/">
                <figure className="user">
                    <div className="user-avatar">
                        <img src={Logo} alt="Logo Digital House	" />
                    </div>
                    <figcaption>Digital House</figcaption>
                </figure>
            </a>

            <nav>
                <section className="menu">
                    <h3>Opciones</h3>
                    <ul>
                        {opciones.map((opcion, index) => {
                            return (
                                <li key={index}>
                                    <a href={opcion.link}>
                                        <FontAwesomeIcon icon={opcion.icon} className={opcion.clase}
                                            style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                                        />
                                        {opcion.nombre}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default BarraLateral;