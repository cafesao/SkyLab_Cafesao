import axios from 'axios'
export {apagarResultado, api}
const arrayCep = {
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
}

async function api(cepInput, div) {
    try {
        carregando(true, div)
        const cepAxios = await axios.get(`https://viacep.com.br/ws/${cepInput}/json/`)
        const { cep, logradouro, bairro, localidade, uf, erro } = cepAxios.data
        arrayCep.cep = cep
        arrayCep.rua =  logradouro
        arrayCep.bairro = bairro
        arrayCep.cidade = localidade
        arrayCep.estado = uf
        arrayCep.erro = erro
        carregando(false, div)
        if (arrayCep.erro == true){
            erroCep(div)
        }
        else{
            adicionarResultado(div)
        }
    }
    catch{}
}

function erroCep(div){
    let erroElemento = document.createElement('h3')
    let erroTexto = document.createTextNode('O Cep não foi encontrado, tente novamente!')
    erroElemento.appendChild(erroTexto)
    div.appendChild(erroElemento)
    console.warn('[Erro] Cep não encontrado')
}

function adicionarResultado(div) {
    let cepElemento = document.createElement('p')
    let ruaElemento = document.createElement('p')
    let bairroElemento = document.createElement('p')  
    let cidadeElemento = document.createElement('p')    
    let estadoElemento = document.createElement('p')
    
    let cepTexto = document.createTextNode(`CEP: ${arrayCep.cep}`)
    let ruaTexto = document.createTextNode(`Rua: ${arrayCep.rua}`)
    let bairroTexto = document.createTextNode(`Bairro: ${arrayCep.bairro}`) 
    let cidadeTexto = document.createTextNode(`Cidade: ${arrayCep.cidade}`)
    let estadoTexto = document.createTextNode(`Estado: ${arrayCep.estado}`) 

    cepElemento.appendChild(cepTexto)
    ruaElemento.appendChild(ruaTexto)
    bairroElemento.appendChild(estadoTexto)
    cidadeElemento.appendChild(bairroTexto)
    estadoElemento.appendChild(cidadeTexto)

    div.appendChild(cepElemento)
    div.appendChild(ruaElemento)
    div.appendChild(bairroElemento)
    div.appendChild(cidadeElemento)
    div.appendChild(estadoElemento)
}

function apagarResultado(div) {
    div.innerHTML = ''
}

function carregando(carregando = true, div) {
    if(carregando == true){
        let carregandoElemento = document.createElement('p')
        let carregandoTexto = document.createTextNode('Carregando...')
        carregandoElemento.setAttribute('id', 'carregando')
        carregandoElemento.appendChild(carregandoTexto)
        div.appendChild(carregandoElemento)
    }
    else{
        document.querySelector('#carregando').remove()
    }
}

