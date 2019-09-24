const express = require('express')
const routes = express.Router()
const GamesController = require('./controllers/GamesController')

routes.get('/games', GamesController.ReceberTudo)
routes.get('/games/:id', GamesController.ReceberEspecifico)
routes.post('/games', GamesController.EnviarDadosNovos)
routes.put('/games/:id', GamesController.AtualizarDados)
routes.delete('/games/:id', GamesController.DeletarDados)

module.exports = routes