const express = require("express");
const router = express.Router();
const profesionesControllerApi = require("../controller/profesionControllerApi");

router.get("/", profesionesControllerApi.list);

module.exports = router;