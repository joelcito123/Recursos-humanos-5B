const express = require('express');
const router = express.Router();
const aspirantesController = require('../controllers/aspirantesController');

router.get('/aspirantes', aspirantesController.list);
router.get('/aspirantes/imagenes', aspirantesController.images);

module.exports = router;