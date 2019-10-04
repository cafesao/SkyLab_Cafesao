const express = require('express') // Chama o modulo Express
const routes = express.Router() // Declara ele dentro de uma const chamada Router

routes.get('/', (req,res) => {
    res.sendfile('./public/index.html')
})

routes.get('/sobre', (req,res) => {
    res.sendFile('./public/sobre.html')
})

routes.get('/blog', (req,res) => {
    res.send('Bem vindo ao blog')    
})

routes.get('/ola/:nome', (req,res) => {
    res.send('Ola')
})

module.exports = routes