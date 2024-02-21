import { faAddressCard, faBuilding, faList, faMessage, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../assets/img/logo-dh.png'

const menuOpciones = [
    { id: 1, nombre: 'Empresas', icon: faBuilding, link: '#' },
    { id: 2, nombre: 'Aspirantes', icon: faUser, link: '#' },
    { id: 3, nombre: 'Profesiones', icon: faList, link: '#' },
    { id: 4, nombre: 'Postulate aquí', icon: faAddressCard, link: '#' },
    { id: 5, nombre: 'Contacto', icon: faMessage, link: '#' },
  ];

const Header = () => {
    return (
        <header className="menu-wrap">
            <figure className="user">
                <div className="user-avatar">
                    <img src={logo} alt="Logo Digital House	" />
                </div>
                <figcaption>
                    Digital House
                </figcaption>
            </figure>
            <nav>
            <section className="menu">
                    <h3>Opciones</h3>
                    <ul>
                        {menuOpciones.map(opcion => (
                            <li key={opcion.id}>
                                <a href={opcion.link}>
                                    <FontAwesomeIcon icon={opcion.icon} />
                                    {' - ' + opcion.nombre}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default Header