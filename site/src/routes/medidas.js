var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});
router.post("/enviarQuiz", function (req, res) {
    medidaController.respostas_quiz(req, res);
});

router.get("/buscarQuiz", function (req, res) {
    medidaController.buscarDadosQuiz(req, res);
}) 
/*  router.get("/tempo-real/:idAquario", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})  */

module.exports = router;