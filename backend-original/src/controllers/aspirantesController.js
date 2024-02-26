const { Aspirantes } = require('../database/models');
const path = require('path')

const controller = {
    list: async (req, res) => {
        let aspirantes = await Aspirantes.findAll({ include: [{ association: "profesiones" }] });
        let resultado = {
            meta: {
                status: 200,
                total: aspirantes.length,
                url: '/api/aspirantes',
            },
            data: aspirantes,
        }

        res.json(resultado)
    }
}

module.exports = controller;