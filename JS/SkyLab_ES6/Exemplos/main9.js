import axios from 'axios'

class Api {
    static async infoUser(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`) 
            console.log(response)
        } 
        catch (err){
            console.warn('ERRO [User não encontrado]')
        }   
    }
}

Api.infoUser('cafesao')
Api.infoUser('cafesaoasdsadada')