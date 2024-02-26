function AspirantesBio(props) {
    const imagenes = [
        {imagen: 'http://localhost:3080/uploads/imagen1.jpg'},
        {imagen: 'http://localhost:3080/uploads/imagen2.jpg'},
        {imagen: 'http://localhost:3080/uploads/imagen3.jpg'},
        {imagen: 'http://localhost:3080/uploads/imagen4.jpg'},
        {imagen: 'http://localhost:3080/uploads/imagen5.jpg'},
        {imagen: 'http://localhost:3080/uploads/imagen6.jpg'}
    ]
    return (
        <>
            <div className="person-box shadow p-3 mb-5 bg-body-tertiary rounded">
                    
                    <div className="box-avatar">
                        <img src={imagenes[props.id - 1].imagen} alt="imagen aspirante" />
                    </div>
                    <div className="box-bio">
                        <h2 className="bio-name">{props.nombre} {props.apellido}</h2>
                        <p className="bio-position">{props.profesiones.nombre}</p>
                    </div>
                    
                    <div className="box-actions">
                        <button>
                            <i className="bi bi-star" />
                        </button>
                        <button>
                            <i className="bi bi-chat" />
                        </button>
                        <button>
                            <i className="bi bi-envelope" />
                        </button>
                    </div>
                </div>
        </>
    )
}

export default AspirantesBio;