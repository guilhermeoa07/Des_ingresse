const mongoose = require('mongoose');
const Usuario = mongoose.model('usuario');
const Validator =require('../fluent-validator');

//Cadastro de usuarios
exports.post = (req,res, next)=>{
    let validar = new Validator();
    validar.hasMinLen(req.body.nome, 3, 'O nome deve ter no minimo 3 caracteres');

    if(!validar.isValid()){
        res.status(400).send(validar.errors()).end();
        return;
    }
    let usuario = new Usuario();
    usuario.nome = req.body.nome;
    usuario.sobrenome = req.body.sobrenome;
    usuario.slug = req.body.slug;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;
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
