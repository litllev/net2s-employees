//const express = require("express");

//const app = express()

//app.get("/", function(req,res){
//    res.send('seja bem vindo;')
//})
//app.get("/sobre", function(req,res){
//    res.send("minha pagina sobre")

//})


//app.get("/ola/:nome",function(req,res){
    
//    res.sendFile(__dirname + "\\index.html")
//})


//app.listen(3333, function(){
//   console.log("funcionando");
//})

const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
})

conexao.connect((err) => {
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados');
  });

const novoUsuario = {
    nome: 'jota',
    cpf: 12345678,
    telefone:12345555
}

conexao.query('INSERT INTO tabela', novoUsuario, (err, results) => {
  if (err) {
    console.error('Erro ao inserir dados na tabela:', err);
    return;
  }
  console.log('Dados inseridos com sucesso:', results);
});

conexao.query('SELECT * FROM tabela', (err, results, fields) => {
    if (err) {
      console.error('Erro ao executar a consulta:', err);
      return;
    }
    console.log('Resultados da consulta:', results);
  });


conexao.end((err) => {
    if (err) {
      console.error('Erro ao fechar a conexão:', err);
      return;
    }
    console.log('Conexão fechada');
  });