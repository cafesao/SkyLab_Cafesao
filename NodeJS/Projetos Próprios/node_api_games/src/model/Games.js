const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const GamesSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    anoDeLançamento: {
        type: Number,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: false,
        default: "Não consta"
    },
    descrição: {
        type: String,
        required: true
    }
})

GamesSchema.plugin(mongoosePaginate)

mongoose.model('Games', GamesSchema)