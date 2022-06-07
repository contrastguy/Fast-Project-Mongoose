 //importa o mongoose
 const mongoose = require("mongoose");

//criar um Schema em forma de JSON 
//isso é um modelo construtor , no qual ls no app.js , devemos escrever essas mesmas propriedades 
const nomesSchema = new mongoose.Schema({
    nome:String, //aqui são as propiedades do JSON junto com os tipos delas
    sobrenome:String,
    apelido:String, 



});

//exportar o mongoose
module.exports = mongoose.model("nomes",nomesSchema)