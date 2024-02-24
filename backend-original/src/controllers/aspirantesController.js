const { Aspirantes } = require('../database/models');

const controller = {
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
}

module.exports = controller;