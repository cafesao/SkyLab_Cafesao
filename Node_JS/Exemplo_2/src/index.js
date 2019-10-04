const express = require('express') // Chama o modulo Express
const app = express() // Declara ele dentro de uma const chamada app
const port = 8081 // Define a porta

app.use('/api', require('./routes/routes'))




app.listen(port)