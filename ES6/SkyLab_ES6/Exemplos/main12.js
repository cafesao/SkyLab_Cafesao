import axios from 'axios'

async function buscarUsuario(usuario){
    try{
        const dataUser = await axios.get(`https://api.github.com/users/${usuario}`)
        console.log(dataUser.data)
    }
    catch{
        console.warn('Usuário não existe'); 
    }
}

buscarUsuario('diego3g')

/*
const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
        console.log(response.data);
        })
        .catch(err => {
        console.log('Usuário não existe');
        });
}

   buscaUsuario('diego3g');
*/