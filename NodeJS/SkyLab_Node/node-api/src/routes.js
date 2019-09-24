const express = require('express')
const routes = express.Router()
const ProductController = require('./controllers/ProductController')

routes.get('/products', ProductController.ReceberTudo)  
routes.get('/products/:id', ProductController.ReceberEspecifico)
routes.post('/products', ProductController.EnviarDadosNovos)
routes.put('/products/:id', ProductController.AtualizarDados)
routes.delete('/products/:id', ProductController.DeletarDados)

module.exports = routes