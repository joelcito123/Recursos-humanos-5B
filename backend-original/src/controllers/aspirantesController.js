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
    },
    submit: async (req, res) => {
        let cosas = await Aspirantes.create({
            nombre: req.body.nombre,
        })
        res.send('hola como estas')
    }
}

module.exports = controller;