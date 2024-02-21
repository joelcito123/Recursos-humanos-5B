import { faArrowRightToBracket, faMagnifyingGlass, faUser, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SearchSection = () => {
    return (
        <section className="search-wrap">
            <div className="search">
                <label htmlFor="search">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" id="search" />
                </label>
            </div>

            <div className="user-actions">
                <button>
                    <a href="#">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </button>
                <button>
                    <a href="#">
                        <FontAwesomeIcon icon={faArrowRightToBracket} />
                    </a>
                </button>
            </div>
        </section>
    )
}

export default SearchSection