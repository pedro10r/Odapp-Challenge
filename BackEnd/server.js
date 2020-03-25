const express = require('express');
const cors = require('cors'); //Permitir acesso de outros domínios.

const mongoose = require('mongoose'); //é um ORM de Bancos não relacionais com mongoDB.

const requireDir = require('require-dir'); /* requireDir faz o papel de require em um diretorio em todos arquivos automaticamente, 
pra não precisar ficar fazendo un require em cada um dos models.*/

//Iniciando aplicação
const app = express();
app.use(express.json()); //Permitir o envio de dados em formato JSON.
app.use(cors());

//Iniciando e conectando o Banco de Dados.
mongoose.connect(
  'mongodb+srv://pedro:FfAo0NqInnjWVgy7@cluster0-xzmd8.mongodb.net/dbprojeto?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);
requireDir('./src/models');


//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);