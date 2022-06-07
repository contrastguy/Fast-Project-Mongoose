//importa o mongoose
const mongoose = require("mongoose");
const coleções = require("./coleções");

//colocar o endereço do banco de dados e o nome do banco de dados
const endereço = "127.0.0.1:27017"
const bancoDeDados = "nomes"

//conecta o BD 
class BancodeDados{
    constructor(){
        this._connect()
    }

    _connect(){ 
        mongoose.connect("mongodb://${endereço}/${bancoDeDados}")
            .then(() => {
                console.log("Conexão com banco de dados bem sucedida")
            })
            .catch((error) => {
                console.error("Conexão com banco de dados mal-sucedida " , error)
            })
    }
}

module.exports = new BancodeDados();

