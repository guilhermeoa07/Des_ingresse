const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Modelo de interação com o MongoDB
const schema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    sobrenome: {
        type: String,
        required: true,
        trim:true
    },
    slug: {
        type:String,
        required: true,
        trim:true,
        index: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true,
        unique:true
    },
    email:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('usuario', schema);