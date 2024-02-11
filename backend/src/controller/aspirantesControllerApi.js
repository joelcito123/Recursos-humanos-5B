const { Aspirantes, Profesiones } = require("../database/models");


const aspirantesControllerApi = {
    list: (req, res) => {
        try {
            Aspirantes.findAll()
                .then(aspirantes => {
                    res.status(200).json({
                        meta: {
                            status: 200,
                            total: aspirantes.length,
                            url: "/api/aspirantes"
                        },
                        data: aspirantes
                    })
                })
        } catch (error) {
            res.status(error.status).json({
                meta: {
                    status: error.status,
                    message: error.message
                }
            });
        }

    },
    detail: (req, res) => {
        let id = req.params.id;
        Aspirantes.findByPk(id)
            .then(aspirante => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        url: `/api/aspirantes/${id}`
                    },
                    data: aspirante
                })
            })
    }
}

module.exports = aspirantesControllerApi;