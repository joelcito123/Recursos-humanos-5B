import SeccionAcceso from "./SeccionAcceso";
import BarraLateral from "./BarraLateral";
import BusquedaSeleccion from "./BusquedaSeleccion";

function Contenedor() {
    return (
        <>
            {/*Dashboard*/}
            <div className="dashboard">
                <SeccionAcceso />
                <BarraLateral />
                <BusquedaSeleccion />
            </div>
            {/*Fin Dashboard*/}
        </>

    )
}

export default Contenedor;