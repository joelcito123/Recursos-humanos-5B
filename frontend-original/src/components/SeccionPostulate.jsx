import '../assets/styles/formulario.css'

function SeccionPostulate() {
    return (
        <>
            <form action='/felicidades'>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required="" />
                <label htmlFor="apellidos">Apellidos:</label>
                <input type="text" id="apellidos" name="apellidos" required="" />
                <label>Sexo:</label>
                <div className="genero">
                    <input type="radio" id="hombre" name="sexo" defaultValue="hombre" />
                    <label htmlFor="hombre">Hombre</label>
                    <input type="radio" id="mujer" name="sexo" defaultValue="mujer" />
                    <label htmlFor="mujer">Mujer</label>
                </div>
                <div className='enviar'>
                    <input type="submit" defaultValue="Enviar" />
                </div>
            </form>

        </>
    )
}

export default SeccionPostulate;