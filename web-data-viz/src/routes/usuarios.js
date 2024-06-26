var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/registrarQuiz", function (req, res) {
    usuarioController.registrarQuiz(req, res);
});

router.post("/buscarQuiz", function (req, res) {
    usuarioController.buscarQuiz(req, res);
});

router.post("/buscarInformacao", function (req, res) {
    usuarioController.buscarInformacao(req, res);
});

router.post("/buscarInformacaoSexo", function (req,res) {
    usuarioController.buscarInformacaoSexo(req, res);
});

module.exports = router;