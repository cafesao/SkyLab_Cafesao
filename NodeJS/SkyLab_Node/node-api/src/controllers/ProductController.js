const mongoose = require('mongoose')
const Product = mongoose.model('Product')

module.exports = {
    async ReceberTudo(req, res){
        const { page = 1 } = req.query
        const TodosProducts = await Product.paginate({  }, { page, limit:10 })
        return res.json(TodosProducts)
    },

    async ReceberEspecifico(req, res){
        const product = await Product.findById(req.params.id)
        return res.json(product)
    },
    
    async EnviarDadosNovos(req, res){
        const product = await Product.create(req.body)
        return res.json(product)
    },

    async AtualizarDados(req, res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(product)
    },

    async DeletarDados(req, res){
        await Product.findByIdAndRemove(req.params.id)
        return res.send()
    }
}
