import axios from 'axios'

class Github{
    static async pegarRepos(repo){
        try{
            const dataRepo = await axios.get(`https://api.github.com/repos/${repo}`)
            console.log(dataRepo.data)
        }
        catch{
            console.warn('Repositório não existe')
        }
    }
}

Github.pegarRepos('cafesao/SCE');
Github.pegarRepos('rocketseat/dslkvmskv');

/*
class Github {
    static getRepositories(repo) {
        axios.get(`https://api.github.com/repos/${repo}`)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log('Repositório não existe');
            })
    }
}

Github.getRepositories('rocketseat/rocketseat.com.br');
Github.getRepositories('rocketseat/dslkvmskv');
*/