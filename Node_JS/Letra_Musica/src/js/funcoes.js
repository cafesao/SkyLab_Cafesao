import axios from 'axios'
export {procurarMusica, apagarResultado}
const musica = {}

async function procurarMusica (div, musica) {
    try{
        carregando(true,div)

        const musicaAxios = await axios.get(`http://localhost:27017/api/dados/${musica}`)
        const { nomeMusica, nomeArtista, lancamento, letra } = musicaAxios

        musica.Musica = nomeMusica
        musica.Artista = nomeArtista
        musica.Lançamento = lancamento
        musica.Letra = letra

        carregando(false,div)
        if (musica.Musica == '') {
            alert('Não foi encontrado a sua musica, verifique e tente novamente!')
        }
        else {
            adicionarResultado(div)
        }
    }
    catch(error){
        carregando(false, div)
        alert('Algo deu errado, verifique e tente novamente!')
        console.warn(error)
    }
}

function carregando(carregando = true,div) {
    if(carregando == true) {
        let carregandoElemento = document.createElement('p')
        let carregandoTexto = document.createTextNode('Carregando...')
        carregandoElemento.setAttribute('id', 'carregando')
        carregandoElemento.appendChild(carregandoTexto)
        div.appendChild(carregandoElemento)
    }
    else {
        document.querySelector('#carregando').remove()
    }
}

function adicionarResultado(div) {
    let musicaElemento = document.createElement('p')
    let artistaElemento = document.createElement('p')
    let lançamentoElemento = document.createElement('p')
    let letraElemento = document.createElement('p')
    
    let musicaTexto = document.createTextNode(`Nome da Musica: ${musica.Musica}`)
    let artistaTexto = document.createTextNode(`Nome do Artista: ${musica.Artista}`)
    let lançamentoTexto = document.createTextNode(`Ano de Lançamento: ${musica.Lançamento}`)
    let letraTexto = document.createTextNode(`Letra: ${musica.Letra}`)

    musicaElemento.appendChild(musicaTexto)
    artistaElemento.appendChild(artistaTexto)
    lançamentoElemento.appendChild(lançamentoTexto)
    letraElemento.appendChild(letraTexto)   
    
    div.appendChild(musicaElemento)    
    div.appendChild(artistaElemento)
    div.appendChild(lançamentoElemento)
    div.appendChild(letraElemento)    
}

function apagarResultado(div) {
    div.innerHTML = ''
}

