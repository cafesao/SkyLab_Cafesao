import axios from "axios"

export default class Api{
    static async infoUserRepo(usuario){
        try{
            const repo = await axios.get(`https://api.github.com/users/${usuario}/repos`)
            return console.log(repo)
        }
        catch{
            return console.warn('ERRO [User não encontrado!]')
        }
    }
}