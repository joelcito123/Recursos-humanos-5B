import { faArrowRightToBracket, faMagnifyingGlass, faBars, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react'

function SeccionAcceso({isOculto}) {

    const [tieneClase, setTieneClase] = useState(false);

    function haceClick() {
        setTieneClase(tieneClase => !tieneClase);
        isOculto(tieneClase)
    }

    return (
        <>
            <section className="search-wrap">
                <div className="search">
                    <label htmlFor="search">
                        <FontAwesomeIcon icon={faMagnifyingGlass}
                            className="bi bi-search"
                            style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                        />
                        <input type="text" id="search" />
                    </label>
                </div>
                <div className="user-actions">
                    <button >
                        <a href="#">
                            <FontAwesomeIcon
                                icon={faBars}
                                className="bi-list"
                                onClick={haceClick}
                                style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                            />
                        </a>
                    </button>
                    <button>
                        <a href="#">
                            <FontAwesomeIcon icon={faUserPlus}
                                className="bi bi-person-add"
                                style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                            />
                        </a>
                    </button>
                    <button>
                        <a href="#">
                            <FontAwesomeIcon icon={faUser}
                                className="bi bi-person"
                                style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                            />
                        </a>
                    </button>
                    <button>
                        <a href="#">
                            <FontAwesomeIcon icon={faArrowRightToBracket}
                                className="bi bi-box-arrow-right"
                                style={{ fontSize: "1.5rem", color: "cornflowerblue" }}
                            />
                        </a>
                    </button>
                </div>

            </section>
        </>
    )
}

export default SeccionAcceso;