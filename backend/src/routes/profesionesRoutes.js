const express = require('express');
const router = express.Router();
const profesionesController = require('../controllers/profesionesController');

router.get('/profesiones', profesionesController.list);

module.exports = router;