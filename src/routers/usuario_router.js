const express = require('express');
const router = express.Router();
const controller = require('../controller/usuario_controller');

//rotas de acesso

router.post('/', controller.post); //rota de cadastrado || metodo post
router.get('/', controller.get); //rota de busca || metodo Get
router.get('/:slug', controller.getBySlug); //rota de busca pelo slug || metodo getBySlug
router.get('/adm/:id', controller.getById); //rota de busca pelo id
router.get('/email/:email', controller.getByEmail); //rota de busca pelo email
router.put('/:id', controller.Put); //rota para alteração dos dados
router.delete('/:id',controller.del); //rota para exclusão do usuario

module.exports = router;