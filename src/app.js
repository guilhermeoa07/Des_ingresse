const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao bd
mongoose.connect('');

//carrega os models
const usuario = require('./models/usuario');

//Carrega as rotas
const usuario_routers = require('./.');


//define acesso as rotas
app.use('/', usuario_routers);

module.exports = app;