import React, {useState} from "react";
import SeccionAcceso from "./SeccionAcceso"
import BarraLateral from "./BarraLateral";

function App() {
    const [menuExist, setMenuExist] = useState(true);

    const isOculto = menu => {
        setMenuExist(menu);
        console.log(menuExist)
    }

    return (
        <>
            <SeccionAcceso isOculto={isOculto}/>
            <BarraLateral menuExist={menuExist}/>
        </>
    )
}

export default App;