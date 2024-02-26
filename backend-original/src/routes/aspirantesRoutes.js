const express = require('express');
const router = express.Router();
const aspirantesController = require('../controllers/aspirantesController');

router.get('/aspirantes', aspirantesController.list);

module.exports = router;