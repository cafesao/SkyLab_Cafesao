const mongo = require('mongoose')
const Music = mongo.model('Music')

module.exports  = {
    async coletarTudo(req,res) {
        const musicas = await Music.find()
        return res.json(musicas)
    },

    async coletar(req,res) {
        const musicas = await Music.find(req.params.nomeMusica, req.params.nomeArtista)
        return res.json(musicas)
    },

    async adicionar(req,res) {
        const musicas = await Music.create(req.body)
        return res.json(musicas)
    },

    async deletar(req,res) {
        await Music.findByIdAndRemove(req.params.id)
    }
}