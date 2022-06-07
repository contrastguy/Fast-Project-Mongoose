const express = require("express");
const app = express();
const porta = 1313;

app.listen(porta , () =>{
    console.log("Servidor rodando na porta:" + porta);
})
