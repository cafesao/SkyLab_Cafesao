const mongoose = require('mongoose')
const Games = mongoose.model('Games')

module.exports = {
    async ReceberTudo (req, res) {
        const { page = 1 } = req.query
        const TodosGames = await Games.paginate({  }, { page, limit:10 })
        return res.json(TodosGames)
    },
    async ReceberEspecifico (req, res) {
        const games = await Games.findById(req.params.id)
        return res.json(games)
    },
    async EnviarDadosNovos (req, res) {
        const games = await Games.create(req.body)
        return res.json(games)
    },
    async AtualizarDados (req, res) {
        const games = await Games.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(games)
    },
    async DeletarDados (req, res) {
        await Games.findByIdAndRemove(req.params.id)
        return res.send()
    }    
}