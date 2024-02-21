const { Aspirantes, Profesiones } = require("../database/models");

const profesionesControllerApi = {
    list: (req, res) => {
        Profesiones.findAll()
            .then(profesiones => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: profesiones.length,
                        url: "/api/profesiones"
                    },
                    payload: profesiones
                })
            })
            .catch(error => {
                const statusCode = error.status || 500;
                res.status(statusCode).json({
                    meta: {
                        status: statusCode,
                        message: error.message || "Ocurrió un error interno"
                    }
                });
            });
    },
}

module.exports = profesionesControllerApi;