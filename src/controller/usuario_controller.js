const mongoose = require('mongoose');
const Usuario = mongoose.model('usuario');
const Validator =require('../fluent-validator');
const crypto = require("crypto");
const DADOS_CRIPTOGRAFAR = {
    algoritmo : "aes256",
    segredo : "chaves",
    tipo : "hex"
};
const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);

function criptografar(senha) {
    const cipher = crypto.createCipher(DADOS_CRIPTOGRAFAR.algoritmo, DADOS_CRIPTOGRAFAR.segredo);
    cipher.update(senha);
    return cipher.final(DADOS_CRIPTOGRAFAR.tipo);
};

//Cadastro de usuarios
exports.post = (req,res, next)=>{
    let validar = new Validator();
    validar.hasMinLen(req.body.nome, 3, 'O nome deve ter no minimo 3 caracteres');
    validar.isEmail(req.body.email, 'Não é um e-mail valido');
    if(!validar.isValid()){
        res.status(400).send(validar.errors()).end();
        return;
    }
    let usuario = new Usuario();
    usuario.nome = req.body.nome;
    usuario.sobrenome = req.body.sobrenome;
    usuario.slug = req.body.slug;
    usuario.login = req.body.login;
    usuario.senha = criptografar(req.body.senha);
    usuario.email = req.body.email;
    usuario.save().then( x=>{
        res.status(201).send({message: 'Cadastrado com sucesso.'
        })
    }).catch(e =>{
        res.status(400).send({message: 'Erro ao cadastrar',
            data: e
        })
    });
};

//Busca de usuarios
exports.get = (req, res, next) =>{
  Usuario.find().then( data => {
      res.status(200).send(data);
  }).catch(e => {
      res.status(400).send(e);
  });
};

//Busca pelo Slug
exports.getBySlug = (req, res, next) =>{
    Usuario.findOne({
        slug: req.params.slug
    }).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//Busca pelo ID
exports.getById = (req, res, next) =>{
    Usuario.findById(req.params.id).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//Busca pelo Email
exports.getByEmail = (req, res, next) =>{
    Usuario.findOne({
        email: req.params.email
    }).then( data => {
        res.status(200).send(data);
    }).catch(e =>{
        res.status(400).send(e);
    });
};

//Edição do usuario
exports.Put = (req, res, next) => {
    Usuario.findByIdAndUpdate(req.params.id,{
        $set:{
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            email: req.body.email,
            login: req.body.login,
            senha: req.body.senha
        }
    }).then( x =>{
        res.status(200).send({message: 'Atualizado com sucesso.'})
    }).catch(e => {
        res.status(400).send({message: 'Erro ao atualizar', data: e})
    })
};

//Exclusão de usuario
exports.del = (req, res, next) => {
    Usuario.findByIdAndRemove(req.body.id).then( x => {
        res.status(200).send({
            message: "Usuario Removido com sucesso."
        });
    }).catch(e =>{
        res.status(400).send({
            message: "Erro ao deletar usuario.",
            data: e
        });
    });
};