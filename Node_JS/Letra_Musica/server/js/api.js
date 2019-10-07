const express = require('express')
const mongo = require('mongoose')
const requireDir = require('require-dir')
const app = express()

app.use(express.json())

mongo.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true })
requireDir('../models/')

app.use('/api', require('../routes/routes'))

app.listen(3001)