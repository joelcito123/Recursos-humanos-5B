const {Profesiones} = require('../database/models');

const controller = {
    list: async (req, res) => {
        let profesiones = await Profesiones.findAll();
        let resultado = {
            meta: {
                status: 200,
                total: profesiones.length,
                url: '/api/profesiones',
            },
            data: profesiones,
        }

        res.json(resultado)
    }
}

module.exports = controller;