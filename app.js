const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao bd
mongoose.connect('');

//carrega os models
const autor = require('./');

//Carrega as rotas
const autor_routers = require('./');


//define acesso as rotas
app.use('/', autor_routers);

module.exports = app;