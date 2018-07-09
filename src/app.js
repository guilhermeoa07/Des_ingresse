const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao bd
mongoose.connect('mongodb://admin:ingresse1234@ds229621.mlab.com:29621/ingresse');

//carrega os models
const usuario = require('./models/usuario');

//Carrega as rotas
const usuario_routers = require('./routers/usuario_router');


//define acesso as rotas
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', usuario_routers);

module.exports = app;