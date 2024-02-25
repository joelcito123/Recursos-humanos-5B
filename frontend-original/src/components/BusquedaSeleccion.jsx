import SeccionAspirantes from "./SeccionAspritanes";
import ListaProfesiones from "./ListaProfesiones";

function BusquedaSeleccion() {
    return (
        <main className="content-wrap">
            {/*Preventa*/}
            <header className="preventa">
                <h2>Búsqueda y selección</h2>
                <p className="text-center h5">
                    Encontramos talento para tu empresa, en todos los cargos
                    administrativos, profesionales y técnicos.
                </p>
                <div>
                    <img src="/images/banner.jpg" alt="Rcursos Humanos" />
                </div>
                {/*Fin Encabezado*/}
            </header>
            {/*Fin Preventa*/}
            {/*Sección aspirantes*/}
            < SeccionAspirantes />
            {/*Fin sección aspirantes*/}
            {/*Sección de profesiones*/}
            < ListaProfesiones/>
            {/*Fin sección profesiones*/}
        </main>
    )
}

export default BusquedaSeleccion;