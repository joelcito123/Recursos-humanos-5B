import { useEffect } from "react";
import { useActionData } from "react-router-dom";

function SeccionPostulate() {

    var data = { username: "example" };
    var url = "http://localhost:3080/api/aspirantes/submit";

    useEffect(() => {
        fetch(url, {
            method: "POST", // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((response) => console.log("Success:", response))
            
    })

    return (
        <>
            <form action="" method="POST">
                <input type="text" name="nombre" placeholder="Inserte Nombre"/>
            </form>
        </>
    )
}

export default SeccionPostulate;