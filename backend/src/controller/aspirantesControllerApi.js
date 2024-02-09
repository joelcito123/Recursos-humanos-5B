const {Aspirantes, Profesiones} = require("../database/models");


const aspirantesControllerApi = {
    list: (req, res) => {
        Aspirantes.findAll()
        .then(aspirantes => {
            res.status(200).json({
                meta: {
                    status: 200,
                    total: aspirantes.length,
                    url: "/aspirantes"
                },
                data: aspirantes
            })
        })
    },
    detail: (req, res) => {
        let id = req.params.id;
        Aspirantes.findByPk(id)
        .then(aspirante => {
            res.status(200).json({
                meta: {
                    status: 200,
                    url: "/aspirantes/" + id
                },
                data: aspirante
            })
        })
    }
}

module.exports = aspirantesControllerApi;