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
    images: async (req, res) => {
        /* necesito que me de un listado de las imagenes */
        // const imagenReq = req.params.id;
        // const imagenRes = await Aspirantes.findByPk(imagenReq)
        // if (imagenRes ) {

        //     const imagenName = imagenRes.imagen


        //     res.send(pathImage);
        // } else {
        //     res.send('No existe esta imagen en la base de datos')
        // };

        const listaImagen = {
            imagen: ''
        }
        // const imagenRes = await Aspirantes.findAll({ attributes: ['imagen'] })

        // let imagenes = [];

        // for (let index = 0; index < imagenRes.length; index++) {
        //     const pathImage = path.resolve(__dirname, '../uploads/' + imagenRes[index].imagen)
        //     imagenes.push(pathImage)
            
        // }
        // res.send(imagenes)
    }
}

module.exports = controller;