import axios from 'axios'
import Api from './funcoes'

Api.infoUserRepo()












/*
class Api {
    static async infoUser(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`) 
            console.log(response)
        } 
        catch{
            console.warn('Erro, usuario não encontrado')
        }   
    }
}

Api.infoUser('cafesao')
Api.infoUser('cafesaoasdsadada')
*/