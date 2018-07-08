const express = require('express');
const router = express.Router();
const controller = require('../controller/usuario_controller');

//rotas de acesso

router.post('/', controller.post); //rota de cadastrado || metodo post

module.exports = router;