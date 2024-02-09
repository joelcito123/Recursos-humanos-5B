const {Aspirantes, Profesiones} = require("../database/models");

const profesionesControllerApi = {
    list: (req, res) => {
        Profesiones.findAll()
        .then(profesiones => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: profesiones.length,
                    url: "/profesiones"
                },
                data: profesiones
            })
        })
    },
}

module.exports = profesionesControllerApi;