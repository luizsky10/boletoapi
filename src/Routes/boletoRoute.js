var express = require("express");
var router = express.Router();
const boletoController = require("../Controllers/boletoController");

router.get("/:barcode", boletoController.getBoletos);

router.post("/", boletoController.createBoleto);

module.exports = router;
