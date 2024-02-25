function BarraLateral() {
    return (
        <header className="menu-wrap">
            <figure className="user">
                <div className="user-avatar">
                    <img src="/images/logo-dh.png" alt="Logo Digital House	" />
                </div>
                <figcaption>Digital House</figcaption>
            </figure>
            <nav>
                <section className="menu">
                    <h3>Opciones</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <i
                                    className="bi bi-building"
                                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                                />
                                - Empresas
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="bi bi-person"
                                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                                />
                                - Aspirantes
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-list-check" />- Profesiones
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i
                                    className="bi bi-person-vcard"
                                    style={{ fontSize: "1.2rem", color: "cornflowerblue" }}
                                />
                                - Postulate aquí
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="bi bi-chat-left-text" />- Contacto
                            </a>
                        </li>
                    </ul>
                </section>
            </nav>
        </header>
    )
}

export default BarraLateral;