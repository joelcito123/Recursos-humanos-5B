const express = require("express");
const router = express.Router();
const aspirantesControllerApi = require("../controller/aspirantesControllerApi");

router.get("/", aspirantesControllerApi.list);

router.get("/:id", aspirantesControllerApi.detail);

module.exports = router;