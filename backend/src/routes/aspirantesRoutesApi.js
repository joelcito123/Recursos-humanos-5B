const express = require("express");
const router = express.Router();
const aspirantesControllerApi = require("../controller/aspirantesControllerApi");

router.get("/", aspirantesControllerApi.list);

module.exports = router;