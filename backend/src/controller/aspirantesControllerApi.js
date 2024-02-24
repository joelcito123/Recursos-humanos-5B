const { Aspirantes } = require("../database/models");


const aspirantesControllerApi = {
    // list: (req, res) => {
    //     Aspirantes.findAll({
    //         raw: true,
    //         include: [
    //             { model: Profesiones, as: 'profesiones', attributes: ['nombre'] }
    //         ]
    //     })
    //         .then(aspirantes => {
    //             console.log(aspirantes)
    //             res.status(200).json({
    //                 meta: {
    //                     status: 200,
    //                     total: aspirantes.length,
    //                     url: "/api/aspirantes"
    //                 },
    //                 payload: aspirantes
    //             });
    //         })
    //         .catch(error => {
    //             const statusCode = error.status || 500;
    //             res.status(statusCode).json({
    //                 meta: {
    //                     status: statusCode,
    //                     message: error.message || "Ocurrió un error interno"
    //                 }
    //             });
    //         });
    // }
    //,
    list: async (req, res) => {
        let aspirantes = await Aspirantes.findAll();
        let resultado = {
            meta: {
                status: 200,
                total: aspirantes.length,
                url: '/api/aspirantes',
            },
            data: aspirantes,
        }

        res.json(resultado)
    },
    detail: (req, res) => {
        let id = req.params.id;
        Aspirantes.findByPk(id, {
            raw: true,
            include: [
                { model: Profesiones, as: 'profesiones', attributes: ['nombre'] }
            ]
        })
            .then(aspirante => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: `/api/aspirantes/${id}`
                    },
                    payload: aspirante
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
    }
}

module.exports = aspirantesControllerApi;