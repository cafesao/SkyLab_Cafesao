//Importando as bilbiotecas

const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')


//Iniciando o App
const app = express()
app.use(express.json())
app.use(cors())

//Iniciando o DB

mongoose.connect('mongodb://localhost:27017/nodeapi', 
{ useNewUrlParser: true, useUnifiedTopology: true })
requireDir('./src/model/')

//Rotas

app.use('/api', require('./src/routes'))

//Ouvindo a porta 3001
app.listen(3001)